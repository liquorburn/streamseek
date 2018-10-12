// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Pagination } from 'bootstrap-vue/es/components'
import VueNativeSock from 'vue-native-websocket'


Vue.component('icon', Icon)
Vue.use(BootstrapVue)
Vue.use(Pagination)
Vue.use(VueNativeSock, 'ws://localhost:9091', { format: 'json' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
