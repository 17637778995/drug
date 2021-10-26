import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FooterBar from '../src/components/FooterBar'
import ProductWrap from './components/ProductWrap'
import '../src/static/css/reset.css'
import Card from './components/Card'
import axios from 'axios'
Vue.component('FooterBar', FooterBar)
Vue.component('Card', Card)
Vue.component('ProductWrap', ProductWrap)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
