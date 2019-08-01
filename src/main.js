// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'ws://127.0.0.1:12312',
//   vuex: {
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
//   },
//   options: { path: "/ws" } //Optional options
// }))


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
