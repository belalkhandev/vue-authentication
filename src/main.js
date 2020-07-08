import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

//set base url
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

Vue.config.productionTip = false

new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app')
