export default {
  namespaced: true,
  state: { countB: 100 },
  getters: { countBB: (state) => state.countB + 10 },
  mutations: {
    increaseB(state) {
      state.countB++;
    }
  },
  actions: {
    asyncIncreaseB({ commit }) {
      commit("increaseB");
    },
    asyncMultiplyB({ commit, dispatch }, payload) {
      commit({type:'increase', ...payload}, {root:true});
      dispatch({type: 'asyncMultiply', ...payload}, {root:true});
    },
  },
};
