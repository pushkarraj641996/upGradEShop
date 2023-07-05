export const Login = (username) => {
  return {
    type: "LOGIN",
    isLoggedIn: true,
    isAdminLoggedIn: username.toLowerCase().includes("admin") ? true : false,
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
