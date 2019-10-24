import Axios from "axios";
import { API } from "../../helpers/ApiHelper";

export const update = data => {
  return function(dispatch) {
    Axios.put(`${API}/update`, data)
      .then(res => {
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        dispatch({
          type: "UPDATE_ACCOUNT",
          payload: res.data.detail_user
        });
        console.log(res);
      })
      .catch(err => {
        dispatch({
          type: "ERROR_UPDATE",
          payload: "error"
        });
        console.log(err);
      });
  };
};
