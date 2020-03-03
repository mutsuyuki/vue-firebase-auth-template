import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import UserStore from "@/store/modules/UserStore";

Vue.config.productionTip = false;


(async () => {
    await UserStore.init();

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
})();


