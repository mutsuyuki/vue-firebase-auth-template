import {Mutation, Action, VuexModule, getModule, Module} from "vuex-module-decorators";
import store from "../../../app_template/src/store";
import firebase from "firebase";
import {User} from "./UserStoreEntity";
import {EditUserParam, SendPasswordResetParam, SignInParam, SignUpParam} from "./UserStoreParams";
import {ActionResult} from "../../common/ActionResult";
import ActionResultFactory from "../../common/ActionResultFactory";


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
    public autoSignInIfEnable() {
        // ログイン保持設定
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        firebase.auth().useDeviceLanguage();

        // 自動ログイン
        const firebaseUser = firebase.auth().currentUser;
        this.setUser(UserStore.makeUserByFirebaseUser(firebaseUser));
    }

    @Action
    public async signUp(param: SignUpParam) {
        return new Promise<ActionResult>(async resolve => {
            // ユーザー作成
            const createUserResult = await firebase.auth()
                .createUserWithEmailAndPassword(param.email, param.password)
                .then(value => {
                    if (!value.user)
                        return UserStore.makeFailedResultByCode("999");  // ありえないはず

                    return ActionResultFactory.makeSuccess();
                })
                .catch(error => {
                    return UserStore.makeFailedResultByFirebaseError(error);
                });

            // ユーザー作成エラーのチェック
            if (createUserResult.isError) {
                resolve(createUserResult);
                return;
            }

            // ユーザー取得
            const firebaseUser = firebase.auth().currentUser;
            if (!firebaseUser) {
                resolve(UserStore.makeFailedResultByCode("999"));  // ありえないはず
                return;
            }

            // 認証メール送信
            const sendEmalResult = await firebaseUser
                .sendEmailVerification({
                    url: window.location.origin + window.location.pathname
                })
                .then(value => {
                    return ActionResultFactory.makeSuccess();
                })
                .catch(error => {
                    return UserStore.makeFailedResultByFirebaseError(error);
                });

            // ユーザー作成エラーのチェック
            if (sendEmalResult.isError) {
                resolve(sendEmalResult);
                return;
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

            resolve(ActionResultFactory.makeSuccess());
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
                    resolve(ActionResultFactory.makeSuccess());
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
                    resolve(ActionResultFactory.makeSuccess());
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
                    resolve(ActionResultFactory.makeSuccess());
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
                    resolve(ActionResultFactory.makeSuccess());
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
                    resolve(ActionResultFactory.makeSuccess());
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

    private static makeFailedResultByCode(errorCode: string): ActionResult {
        const errorMessages: { [code: string]: string } = {
            "001": "Please click the URL to verify your email address",
            "002": "Please sign in",
            "999": "Unexpected error occurred"
        };

        return ActionResultFactory.makeFailed({
            code: errorCode,
            message: errorMessages[errorCode]
        });
    }

    private static makeFailedResultByFirebaseError(firebaseError: firebase.FirebaseError): ActionResult {
        return ActionResultFactory.makeFailed({
            code: firebaseError.code,
            message: firebaseError.message
        });
    }

}

export default getModule(UserStore);
