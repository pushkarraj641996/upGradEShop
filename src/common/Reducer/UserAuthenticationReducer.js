const initialState = {
  isLoggedIn: false,
  isAdminLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        isAdminLoggedIn: action.isAdminLoggedIn,
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
        isAdminLoggedIn: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
