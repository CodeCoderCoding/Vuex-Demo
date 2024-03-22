export default {
  state: {countA: 10},
  getters: { countAA: (state) => state.countA + 10 },
  mutations: {
    increaseA(state) {
      state.countA ++;
    }
  },
  actions: {
    asyncIncreaseA({commit}) {
      commit('increaseA')
    }
  }
}
