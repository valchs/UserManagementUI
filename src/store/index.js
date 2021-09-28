// import { createStore } from 'vuex';
import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/users/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users: usersModule,
    }
});

// import Vue from 'vue'
// import Vuex from 'vuex'
// import mutations from './mutations.js';
// import actions from './actions.js';
// import getters from './getters.js'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     users: [
//       {
//         id: 'c1',
//         firstName: 'Maximilian',
//         lastName: 'Schwarzmüller',
//         phoneNumber: '23213123',
//         email: 'fsdfsdfgsd'
//       },
//       {
//         id: 'c2',
//         firstName: 'Julie',
//         lastName: 'Jones',
//         phoneNumber: '23213123',
//         email: 'fsdfsdfgsd'
//       }
//     ]
//   },
//   mutations,
//   actions,
//   getters
// })