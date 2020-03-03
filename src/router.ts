import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import SignUp from "@/views/SignUp.vue";
import Front from "@/views/Front.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import UserStore from "@/store/modules/UserStore";
import EditUser from "@/views/EditUser.vue";
import SignOut from "@/views/SignOut.vue";
import Quit from "@/views/Quit.vue";

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: 'front',
        component: Front
    },

    {
        path: '/sign_up',
        name: 'sign_up',
        component: SignUp
    },

    {
        path: '/reset_password',
        name: 'reset_password',
        component: ResetPassword
    },

    {
        path: '/home',
        name: 'home',
        meta: {requiresAuth: true},
        component: Home
    },

    {
        path: '/edit_user',
        name: 'edit_user',
        meta: {requiresAuth: true},
        component: EditUser
    },


    {
        path: '/sign_out',
        name: 'sign_out',
        meta: {requiresAuth: true},
        component: SignOut
    },

    {
        path: '/quit',
        name: 'quit',
        meta: {requiresAuth: true},
        component: Quit
    }

];

const router = new VueRouter({
    routes
});


// ログインチェック
router.beforeEach((to, from, next) => {
    const isRequiresAuth: boolean = to.matched.some(v => v.meta.requiresAuth);  // 認証ページにいくか
    const isSignedIn: boolean = UserStore.isSignedIn;  // サインイン済みか

    // 要認証ページなのにサインアウトしてなかったらフロントページに飛ばす
    if (isRequiresAuth && !isSignedIn) {
        next({name: "front"});
        return;
    }

    // 認証不要ページなのにサインイン済ならユーザー用ホームページに飛ばす（アプリによよってはいらないかも）
    if (!isRequiresAuth && isSignedIn) {
        next({name: "home"});
        return;
    }

    next();
});


export default router
