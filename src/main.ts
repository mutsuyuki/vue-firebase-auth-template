import store from "@/store";
import Vue from 'vue'
import DatabaseConnector from "@/store/common/DatabaseConnector";
import UserStore from "@/store/modules/UserStore/UserStore";
import router from "@/router";
import App from "@/App.vue";

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
