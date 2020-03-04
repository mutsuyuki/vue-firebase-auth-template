import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UserStore from "../../UserStore/UserStore";

Vue.config.productionTip = false;


(async () => {
    await UserStore.init();

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
})();


