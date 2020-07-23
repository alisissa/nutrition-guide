import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptorInit from './apis/interceptor';

interceptorInit();

Vue.config.productionTip = false;
// exprot bus to be able to emit and subscribe
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
