import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptorInit from './apis/interceptor';

interceptorInit();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
