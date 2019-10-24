const initialState = {
  data: [],
  redirect: false,
  errors: "",
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "LOGIN_ACCOUNT":
      console.log(state);
      return { ...state, data: action.payload, redirect: true };
    case "ERROR_LOGIN":
      return { ...state, errors: action.payload, isLoading: false };
    case "UPDATE_ACCOUNT":
      return { ...state, data: action.payload };
    case "ERROR_UPDATE":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
