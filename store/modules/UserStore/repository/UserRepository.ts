import firebase from "firebase";
import ResultStatusFactory from "../../../common/ResultStatusFactory";
import {SendPasswordResetParam, SignInByPasswordParam, SignUpByPasswordParam} from "../UserStoreParams";
import {ResultStatus} from "../../../common/ResultStatus";
import {FirestoreUserDoc} from "./FirestoreUserEntitiy";
import {ResultValue} from "../../../common/ResultValue";
import ResultValueFactory from "../../../common/ResultValueFactory";
import UserFactory from "../UserFactory";
import {User} from "../UserEntity";
import FirestoreUserFactory from "./FirestoreUserFactory";

export class UserRepository {

    // 自動ログイン設定
    public static enableAutoSignIn(): void {
        // ログイン保持設定
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }

    // ログイン中ユーザー取得（FirebaseのAuthユーザーとFirestoreのusersを、アプリのUserデータに変換）
    public static getSignedInUser() {
        return new Promise<ResultValue<User>>(async resolve => {
            // ログイン中のユーザー取得
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultValueFactory.makeFailed("GET_CURRENT_USER_001", UserFactory.makeEmpty())); //ありえないはず
                return;
            }

            // Firestoreのユーザーを取得
            const getResult = await firebase.firestore()
                .collection("users")
                .doc(firebaseAuthUser.uid)
                .get()
                .then(snapshot => {
                    return ResultValueFactory.makeSuccess(snapshot.data() as FirestoreUserDoc)
                })
                .catch(error => {
                    const emptyFirestoreUser = FirestoreUserFactory.makeEmptyFirestoreUserDoc();
                    return ResultValueFactory.makeFailedByFirebaseError(error, emptyFirestoreUser);
                });

            if (getResult.isError) {
                resolve(ResultValueFactory.makeFailed("GET_CURRENT_USER_002", UserFactory.makeEmpty()));
            }

            const user = UserFactory.makeByFirebaseUser(firebaseAuthUser, getResult.value);
            resolve(ResultValueFactory.makeSuccess(user));
        });
    }

    // ユーザー作成
    public static createByPassword(param: SignUpByPasswordParam) {
        return new Promise<ResultStatus>(async resolve => {
            // ユーザー作成
            const createAuthUserResult = await firebase.auth()
                .createUserWithEmailAndPassword(param.email, param.password)
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            // ユーザー作成エラーのチェック
            if (createAuthUserResult.isError) {
                resolve(createAuthUserResult);
                return;
            }

            // ログイン中ユーザー取得
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeFailed("CREATE_USER_999")); //ありえないはず
                return;
            }

            // firestoreのusersコレクションにも同時にユーザーを作る
            const firestoreUserDoc: FirestoreUserDoc = {
                name: param.name,
                biography: "",
                photoUrl: "",
            };

            const createFirestoreUserResult = await firebase.firestore()
                .collection("users")
                .doc(firebaseAuthUser.uid)
                .set(firestoreUserDoc)
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            // ユーザー作成エラーのチェック
            if (createFirestoreUserResult.isError) {
                resolve(createAuthUserResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    // 認証メール送信
    public static sendEmailVerification() {
        return new Promise<ResultStatus>(async resolve => {
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeFailed("SEND_EMAIL_001"));
                return;
            }

            // 認証メール送信
            firebase.auth().useDeviceLanguage();
            const sendEmailResult = await firebaseAuthUser
                .sendEmailVerification({url: window.location.origin + window.location.pathname})
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            if (sendEmailResult.isError) {
                resolve(sendEmailResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        })
    }

    // パスワードログイン
    public static signInByPassword(param: SignInByPasswordParam) {
        return new Promise<ResultStatus>(async resolve => {
            // ログイン
            const signInResult = await firebase.auth()
                .signInWithEmailAndPassword(param.email, param.password)
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            if (signInResult.isError) {
                resolve(signInResult);
                return;
            }

            // ログイン中ユーザー取得
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeFailed("SIGNIN_999"));  // ありえないはず
                return;
            }

            if (!firebaseAuthUser.emailVerified) {
                resolve(ResultStatusFactory.makeFailed("SIGNIN_001"));
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        })
    }

    // ユーザー情報編集
    public static editUser(param: User) {
        return new Promise<ResultStatus>(async resolve => {
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeFailed("EDIT_USER_001"));
                return;
            }

            const updateResult = await firebase.firestore()
                .collection("users")
                .doc(firebaseAuthUser.uid)
                .update(FirestoreUserFactory.makeFirestoreUserByUser(param))
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            if (updateResult.isError) {
                resolve(updateResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    // サインアウト
    public static signOut() {
        return new Promise<ResultStatus>(async resolve => {
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeSuccess());
                return;
            }

            const signOutResult = await firebase.auth()
                .signOut()
                .then(_ => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                })

            if (signOutResult.isError) {
                resolve(signOutResult)
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        })
    }

    // パスワードリセット
    public static sendPasswordReset(param: SendPasswordResetParam) {
        return new Promise<ResultStatus>(async resolve => {

            const actionCodeSetting: firebase.auth.ActionCodeSettings = {
                url: window.location.origin + window.location.pathname
            };

            firebase.auth().useDeviceLanguage();
            const sendResult = await firebase.auth()
                .sendPasswordResetEmail(param.email, actionCodeSetting)
                .then(_ => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });


            if (sendResult.isError) {
                resolve(sendResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        });
    }


    // ユーザー削除
    public static deleteUser() {
        return new Promise<ResultStatus>(async resolve => {
            const firebaseAuthUser = firebase.auth().currentUser;
            if (!firebaseAuthUser) {
                resolve(ResultStatusFactory.makeFailed("DELETE_USER_001"));
                return;
            }

            const deleteAuthUserResult = await firebaseAuthUser
                .delete()
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            if (deleteAuthUserResult.isError) {
                resolve(deleteAuthUserResult);
                return;
            }

            const deleteFirestoreUserResult = await firebase.firestore()
                .collection("users")
                .doc(firebaseAuthUser.uid)
                .delete()
                .then(value => {
                    return ResultStatusFactory.makeSuccess();
                })
                .catch(error => {
                    return ResultStatusFactory.makeFailedByFirebaseError(error);
                });

            if (deleteFirestoreUserResult.isError) {
                resolve(deleteFirestoreUserResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        });
    }


    // ---- todo ---------------------------------------------------------------

    // 再認証
    public static async reauthenticate() {
        //     const credential = firebase.auth.EmailAuthProvider.credential(email, password);
        //     const { user } = await firebase.auth().currentUser.reauthenticateAndRetrieveDataWithCredential(credential);
    }


    // メールアドレス変更
    public static async updateEmail() {
        // await firebase.auth().currentUser.updateEmail(email);
        // await firebase.auth().currentUser.getIdToken(true);
        // await firebase.auth().currentUser.sendEmailVerification({
        //     url: 'https://example.com/setting/email',
        //     handleCodeInApp: false,
        // });
    }
}
