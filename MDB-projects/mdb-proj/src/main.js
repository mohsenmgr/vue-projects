import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store'

import Home from './views/Home.vue'
import MyComp from './components/MyComp.vue'
import Login from './components/login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/comp',
      name: 'comp',
      component: MyComp,
      props: false

    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: false
    },
  ]
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
