import {Mutation, Action, VuexModule, getModule, Module} from "vuex-module-decorators";
import store from "../../../app_template/src/store";
import {User} from "./UserEntity";
import {SendPasswordResetParam, SignInByPasswordParam, SignUpByPasswordParam} from "./UserStoreParams";
import {ResultStatus} from "../../common/ResultStatus";
import ResultStatusFactory from "../../common/ResultStatusFactory";
import {UserRepository} from "./repository/UserRepository";
import UserFactory from "./UserFactory";


@Module({
    name: "UserStore",
    dynamic: true,
    store: store,
    namespaced: true
})

class UserStore extends VuexModule {

    // states
    private _user: User = UserFactory.makeEmpty();

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
        return this._user;
    }

    @Mutation
    private setUser(user: User) {
        this._user = user;
    }

    @Action
    public async autoSignInIfEnable() {
        UserRepository.enableAutoSignIn();

        const getUserResult = await UserRepository.getSignedInUser();
        if (!getUserResult.isError) {
            this.setUser(getUserResult.value);
        }
    }

    @Action
    public async signUpByPassword(param: SignUpByPasswordParam) {
        return new Promise<ResultStatus>(async resolve => {
            // ユーザー作成
            const createResult = await UserRepository.createByPassword(param);
            if (createResult.isError) {
                resolve(createResult);
                return;
            }

            // 認証メール送る
            const sendEmailResult = await UserRepository.sendEmailVerification();
            if (sendEmailResult.isError) {
                resolve(sendEmailResult);
                return;
            }

            // ログアウトしておく
            await UserRepository.signOut();

            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    @Action
    public signInByPassword(param: SignInByPasswordParam) {
        return new Promise<ResultStatus>(async resolve => {
            const signInResult = await UserRepository.signInByPassword(param);
            if (signInResult.isError) {
                resolve(signInResult)
                return;
            }

            const getUserResult = await UserRepository.getSignedInUser();
            if (getUserResult.isError) {
                resolve(getUserResult);
            }

            this.setUser(getUserResult.value);
            resolve(ResultStatusFactory.makeSuccess());
        });
    }


    @Action
    public editUser(param: User) {
        return new Promise<ResultStatus>(async resolve => {
            const editUserResult = await UserRepository.editUser(param);
            if (editUserResult.isError) {
                resolve(editUserResult)
                return;
            }

            const getUserResult = await UserRepository.getSignedInUser();
            if (getUserResult.isError) {
                resolve(getUserResult);
            }

            this.setUser(getUserResult.value);
            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    @Action
    public signOut() {
        return new Promise<ResultStatus>(async resolve => {
            const signOutResult = await UserRepository.signOut();
            if (signOutResult.isError) {
                resolve(signOutResult);
                return;
            }

            this.setUser(UserFactory.makeEmpty());
            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    @Action
    public sendPasswordReset(param: SendPasswordResetParam) {
        return new Promise<ResultStatus>(async resolve => {
            const sendResult = await UserRepository.sendPasswordReset(param);
            if (sendResult.isError) {
                resolve(sendResult);
                return;
            }

            resolve(ResultStatusFactory.makeSuccess());
        });
    }

    @Action
    public deleteUser() {
        return new Promise<ResultStatus>(async resolve => {
            const deleteResult = await UserRepository.deleteUser();
            if (deleteResult.isError) {
                resolve(deleteResult);
                return;
            }

            this.setUser(UserFactory.makeEmpty());
            resolve(ResultStatusFactory.makeSuccess());
        });
    }
}

export default getModule(UserStore);
