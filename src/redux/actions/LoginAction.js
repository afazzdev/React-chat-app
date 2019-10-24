import Axios from "axios";
import { API } from "../../helpers/ApiHelper";

export const login = data => {
  return function(dispatch) {
    dispatch({ type: "IS_LOADING", payload: true });
    Axios.post(`${API}/login`, data)
      .then(res => {
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        dispatch({
          type: "LOGIN_ACCOUNT",
          payload: res.data.detail_user
        });
        console.log(res);
      })
      .catch(err => {
        dispatch({
          type: "ERROR_LOGIN",
          payload: err.name
        });
        // console.log(err);
      });
  };
};
