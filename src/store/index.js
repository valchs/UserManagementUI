// import { createStore } from 'vuex';
import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/users/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users: usersModule
  }
})
