const defaultState = () => ({
  show: false,
  message: "",
});

const getters = {
  show(state) {
    return state.show;
  },
  message(state) {
    return state.message;
  },
};

const mutations = {
  setInitState(state) {
    Object.assign(state, defaultState);
  },
  setShow(state, show) {
    state.show = show;
  },
  setMessage(state, message) {
    state.message = message;
  },
};

const actions = {
  showMessage({ commit }, message) {
    commit("setShow", true);
    commit("setMessage", message);
  },
  updateShow({ commit }, show) {
    commit("setShow", show);
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
};
