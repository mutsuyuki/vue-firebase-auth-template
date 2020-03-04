import {Mutation, Action, VuexModule, getModule, Module} from "vuex-module-decorators";
import store from "@/store";
import firebase from "firebase";
import {
    ActionResult,
    EditUserParam,
    SendPasswordResetParam,
    SignInParam,
    SignUpParam,
    User
} from "./UserStoreInterfaces";

@Module({
    name: "UserStore",
    dynamic: true,
    store: store,
    namespaced: true
})

class UserStore extends VuexModule {

    // states
    private _user: User = UserStore.makeEmptyUser();

    // getters
    get isSignedIn() {
        for (let i = 0; i < this._user.providers.length; i++) {
            const provider = this._user.providers[i];

            if (!provider)
                continue;

            if (provider == "password" && !this._user.emailVerified)
                continue;

            return true;
        }

        return false;
    }

    get user(): User {
        return JSON.parse(JSON.stringify(this._user));
    }


    @Mutation
    private setUser(user: User) {
        this._user = user;
    }


    @Action
    public async init() {
        return new Promise<void>(async resolve => {
            firebase.initializeApp({
                apiKey: "AIzaSyBLla-Bgoabz__yXsdqU7FPPPW92rO4ntk",
                authDomain: "stock-a0daa.firebaseapp.com",
                databaseURL: "https://stock-a0daa.firebaseio.com",
                projectId: "stock-a0daa",
                storageBucket: "stock-a0daa.appspot.com",
                messagingSenderId: "285247656770",
                appId: "1:285247656770:web:bacade1b6458d78d78aedb",
                measurementId: "G-L330KEXGD7"

            });

            // firebaseの初期化を待つ
            await new Promise<void>(resolveAtFirebaseInit => {
                const unsubscribe = firebase.auth().onAuthStateChanged(_ => {
                    unsubscribe();
                    resolveAtFirebaseInit();
                });
            });

            // ログイン保持設定
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            firebase.auth().useDeviceLanguage();

            // 自動ログイン
            const firebaseUser = firebase.auth().currentUser;
            this.setUser(UserStore.makeUserByFirebaseUser(firebaseUser));

            resolve();
        });
    }

    @Action
    public async signUp(param: SignUpParam) {
        return new Promise<ActionResult>(async resolve => {
            // ユーザー作成
            const resultCreateUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(param.email, param.password)
                .then(value => {
                    if (!value.user) {
                        return UserStore.makeFailedResultByCode("999");  // ありえないはず
                    }

                    const actionCodeSetting: firebase.auth.ActionCodeSettings = {
                        url: window.location.origin + window.location.pathname
                    };
                    value.user.sendEmailVerification(actionCodeSetting);

                    return UserStore.makeSuccessResult();
                })
                .catch(error => {
                    return UserStore.makeFailedResultByFirebaseError(error);
                });

            // ユーザー作成エラーのチェック
            if (resultCreateUser.isError) {
                resolve(resultCreateUser);
                return;
            }

            // ユーザー取得
            const firebaseUser = firebase.auth().currentUser;
            if (!firebaseUser) {
                return UserStore.makeFailedResultByCode("999");  // ありえないはず
            }

            // ユーザー名の登録
            const resultEditUser = await this.editUser({
                email: firebaseUser.email || "",
                name: param.name,
                photoURL: ""
            });

            // ユーザー名登録のエラーチェック
            if (resultEditUser.isError) {
                resolve(resultEditUser);
                return;
            }

            // ログアウトしておく
            const resultSignOut = await this.signOut();

            // ログアウトのエラーチェック
            if (resultSignOut.isError) {
                resolve(resultSignOut);
                return;
            }

            resolve(UserStore.makeSuccessResult());
        });
    }

    @Action
    public signIn(param: SignInParam) {
        return new Promise<ActionResult>(resolve => {
            firebase
                .auth()
                .signInWithEmailAndPassword(param.email, param.password)
                .then(value => {
                    if (!value.user) {
                        resolve(UserStore.makeFailedResultByCode("999"));  // ありえないはず
                        return;
                    }

                    if (!value.user.emailVerified) {
                        resolve(UserStore.makeFailedResultByCode("001"));
                        return;
                    }

                    this.setUser(UserStore.makeUserByFirebaseUser(value.user));
                    resolve(UserStore.makeSuccessResult());
                })
                .catch(error => {
                    resolve(UserStore.makeFailedResultByFirebaseError(error));
                });
        });
    }


    @Action
    public editUser(param: EditUserParam) {
        return new Promise<ActionResult>(resolve => {
            const firebaseUser = firebase.auth().currentUser;
            if (!firebaseUser) {
                resolve(UserStore.makeFailedResultByCode("002"));
                return;
            }

            firebaseUser
                .updateProfile({displayName: param.name})
                .then(value => {
                    const editedUser = UserStore.makeUserByFirebaseUser(firebaseUser);
                    this.setUser(editedUser);
                    resolve(UserStore.makeSuccessResult());
                })
                .catch(error => {
                    resolve(UserStore.makeFailedResultByFirebaseError(error));
                });
        });
    }

    @Action
    public signOut() {
        return new Promise<ActionResult>(resolve => {
            firebase
                .auth()
                .signOut()
                .then(_ => {
                    this.setUser(UserStore.makeEmptyUser());
                    resolve(UserStore.makeSuccessResult());
                })
                .catch(error => {
                    resolve(UserStore.makeFailedResultByFirebaseError(error));
                })
        });
    }

    @Action
    public sendPasswordReset(param: SendPasswordResetParam) {
        return new Promise<ActionResult>(resolve => {

            const actionCodeSetting: firebase.auth.ActionCodeSettings = {
                url: window.location.origin + window.location.pathname
            };

            firebase
                .auth()
                .sendPasswordResetEmail(param.email, actionCodeSetting)
                .then(_ => {
                    resolve(UserStore.makeSuccessResult());
                })
                .catch(error => {
                    resolve(UserStore.makeFailedResultByFirebaseError(error));
                })
        });
    }

    @Action
    public deleteUser() {
        return new Promise<ActionResult>(resolve => {
            const firebaseUser = firebase.auth().currentUser;
            if (!firebaseUser) {
                resolve(UserStore.makeFailedResultByCode("002"));
                return;
            }

            firebaseUser
                .delete()
                .then(value => {
                    this.setUser(UserStore.makeEmptyUser());
                    resolve(UserStore.makeSuccessResult());
                })
                .catch(error => {
                    resolve(UserStore.makeFailedResultByFirebaseError(error));
                });
        });
    }

    // ---- ヘルパーメソッド群 ------------------
    private static makeEmptyUser(): User {
        return {
            id: "",
            name: "",
            email: "",
            providers: [],
            emailVerified: false
        }
    }

    private static makeUserByFirebaseUser(firebaseUser: firebase.User | null): User {
        if (firebaseUser) {
            return {
                id: firebaseUser.uid,
                email: firebaseUser.email || "",
                name: firebaseUser.displayName || "",
                photoURL: firebaseUser.photoURL || "",
                providers: firebaseUser.providerData.map(v => v ? v.providerId : ""),
                emailVerified: firebaseUser.emailVerified,
            };
        } else {
            return UserStore.makeEmptyUser();
        }
    }


    private static makeSuccessResult(): ActionResult {
        return {
            isError: false,
            errorCode: "",
            errorMessage: ""
        }
    }

    private static makeFailedResult(error: { code: string, message: string }): ActionResult {
        return {
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
    }

    private static makeFailedResultByCode(errorCode: string): ActionResult {
        const errorMessages: { [code: string]: string } = {
            "001": "Please click the URL to verify your email address",
            "002": "Please sign in",
            "999": "Unexpected error occurred"
        };

        return UserStore.makeFailedResult({
            code: errorCode,
            message: errorMessages[errorCode]
        });
    }

    private static makeFailedResultByFirebaseError(firebaseError: firebase.FirebaseError): ActionResult {
        return UserStore.makeFailedResult({
            code: firebaseError.code,
            message: firebaseError.message
        });
    }

}

export default getModule(UserStore);
