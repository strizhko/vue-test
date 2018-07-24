import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { saySome } from './mixins/messageMixin'
import {checkInp} from './mixins/checkInput'
import Login from './Login.vue'
import Registration from './Registration.vue'
import Prophile from './Prophile.vue'
import Footer from './Footer.vue'
import store from './vuex/mutationsAndActions'


Vue.use(VueRouter)
Vue.mixin(saySome)
Vue.mixin(checkInp)


const routes = [
  {path: '/', name:'login', component: Login},
  {path: '/Registration', name:'registration', component: Registration},
  {path: '/Prophile/:id', name:'prophile', component: Prophile, params: store.state.usingId}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
}).$mount('#app')
