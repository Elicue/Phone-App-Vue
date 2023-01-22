import { createStore } from 'vuex'

export default createStore({
  state: {
    historicall: [],

    registered: [
      {
        name: 'mwa',
        number: '0642632909',
      },
      {
        name: 'arthur',
        number: '6666666666',
      },
    ],
  },

  getters: {
  },

  mutations: {
    call(state, payload) {
      state.historicall.push(payload)
    },
  },

  actions: {
  },
  modules: {
  }
})
