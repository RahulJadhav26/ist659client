import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import Sell from '../views/Sell.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy,
    meta: {
      authRequired: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.user.loginStatus) {
      next()
    } else {
      alert('You must be logged in to see this page')
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
