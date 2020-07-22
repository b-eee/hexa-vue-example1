import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import system from "@/store/modules/system";
import snackbar from "@/store/modules/snackbar";
import user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    system,
    snackbar,
    user,
  },
  plugins: [
    createPersistedState({
      key: "hexabase",
      storage: window.sessionStorage,
    }),
  ],
});
