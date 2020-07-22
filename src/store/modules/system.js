const defaultState = () => ({
  loading: false,
});

const getters = {
  loading(state) {
    return state.loading;
  },
};

const mutations = {
  setInitState(state) {
    Object.assign(state, defaultState);
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

const actions = {
  InitState({ commit }) {
    commit("setInitState");
  },
  updateLoading({ commit }, loading) {
    commit("setLoading", loading);
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
};
