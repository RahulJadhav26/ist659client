import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loginStatus: false,
      data: {}
    },
    requests: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
