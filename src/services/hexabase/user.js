import axios from "axios";

const login = async (email, password) => {
  const params = {
    email: email,
    password: password,
  };
  const result = await axios.post("/linker-api/login", params);
  return result.data.token;
};

const logout = async () => {
  await axios.post("/linker-api/users/logout");
};

const getUserInfo = async () => {
  const result = await axios.get("/linker-api/userinfo");
  return result.data;
};

export default {
  login: login,
  logout: logout,
  getUserInfo: getUserInfo,
};
