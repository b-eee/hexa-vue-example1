import hexabase from "@/services/hexabase";

const defaultState = () => ({
  token: "",
  status: false,
  username: "",
  email: "",
  avatar: "",
});

const getters = {
  token(state) {
    return state.token;
  },
  status(state) {
    return state.status;
  },
  username(state) {
    return state.username;
  },
  email(state) {
    return state.email;
  },
  avatar(state) {
    return state.avatar;
  },
};

const mutations = {
  setInitState(state) {
    Object.assign(state, defaultState);
  },
  setToken(state, token) {
    state.token = token;
  },
  setStatus(state, status) {
    state.status = status;
  },
  setUserName(state, username) {
    state.username = username;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
};

const actions = {
  InitState({ commit }) {
    commit("setInitState");
  },
  async hexaLogin({ commit }, { email, password }) {
    const token = await hexabase.user.login(email, password);
    commit("setToken", token);
    commit("setStatus", true);
  },
  async hexaLogout({ commit }) {
    await hexabase.user.logout();
    commit("setUserName", "");
    commit("setEmail", "");
    commit("setAvatar", "");
    commit("setToken", "");
    commit("setStatus", false);
  },
  async upateUserInfo({ commit }) {
    const userinfo = await hexabase.user.getUserInfo();
    commit("setUserName", userinfo.username);
    commit("setEmail", userinfo.email);
    commit("setAvatar", userinfo.profile_pic);
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
};
