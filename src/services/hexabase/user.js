import axios from "axios";

const login = async (email, password) => {
  const params = {
    email: email,
    password: password,
  };
  const result = await axios.post(`${process.env.VUE_APP_HEXABAESE_API_URL}/login`, params);
  return result.data.token;
};

const logout = async () => {
  await axios.post(`${process.env.VUE_APP_HEXABAESE_API_URL}/users/logout`);
};

const getUserInfo = async () => {
  const result = await axios.get(`${process.env.VUE_APP_HEXABAESE_API_URL}/userinfo`);
  return result.data;
};

export default {
  login: login,
  logout: logout,
  getUserInfo: getUserInfo,
};
