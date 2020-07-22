import Vue from "vue";
import Vuetify from "vuetify/lib";
import { extend, localize } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import ja from "vee-validate/dist/locale/ja.json";

localize("ja", ja);
extend("required", {
  ...required,
});
extend("email", {
  ...email,
});

Vue.use(Vuetify);

export default new Vuetify({});
