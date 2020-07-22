import axios from "axios";
import store from "@/store";

export default () => {
  axios.interceptors.request.use(
    config => {
      config.headers["content-type"] = "application/json";

      const token = store.getters["user/token"];
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status !== 401) {
        store.dispatch(
          "snackbar/showMessage",
          `API実行中にエラーが発生しました。(${error.message})`
        );
      }
      return Promise.reject(error);
    }
  );
};
