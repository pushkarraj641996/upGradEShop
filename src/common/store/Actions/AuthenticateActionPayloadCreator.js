export const Login = (username) => {
  return {
    type: "LOGIN",
    isLoggedIn: true,
    isAdminLoggedIn: username.toLowerCase() === "admin" ? true : false,
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
