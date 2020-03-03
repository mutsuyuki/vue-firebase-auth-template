import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import firebase from "firebase";
import UserStore from "@/store/modules/UserStore";

Vue.config.productionTip = false;

// firebase 初期化
firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});


// firebase 初期化をまつ
const unsubscribe = firebase.auth().onAuthStateChanged(async _ => {
    unsubscribe();

    await UserStore.init();

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
});
