import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import interceptorsSetup from "@/services/http/interceptors";

interceptorsSetup();

Vue.config.productionTip = false;

Vue.config.errorHandler = error => {
  console.error("vue example1 =>");
  console.error(error);
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
