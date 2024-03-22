import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

export default createStore({
  modules: {
    moduleA: moduleA,
    moduleB: moduleB
  },
  state: { count: 1 },
  getters: { 
    countGlobal: (state) => state.count * 2
  },
  mutations: {
    increase(state) {
      state.count ++;
    },
    multiply(state, payload) {
      state.count *= payload.count;
    }
  },
  actions: {
    asyncIncrease({commit}) {
      commit('increase')
    },
    asyncMultiply({commit}, payload) {
      commit('multiply', payload)
    }
  }
})
