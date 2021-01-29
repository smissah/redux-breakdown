const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = true);

    case "SIGN_OUT":
      return (state = false);

    case "TOGGLE_SIGN_IN":
      return (state = !state);

    default:
      return state;
  }
};

export default isLoggedReducer;
