import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UserStore from "../../store/modules/UserStore/UserStore";
import DatabaseConnector from "../../store/common/DatabaseConnector";

Vue.config.productionTip = false;

(async () => {

    // データベース接続
    const connectResult = await DatabaseConnector.connect();
    if (connectResult.isError) {
        alert(connectResult.errorMessage);
        return;
    }

    await UserStore.autoSignInIfEnable();

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
})();
