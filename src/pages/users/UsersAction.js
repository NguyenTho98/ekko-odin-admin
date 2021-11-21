import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetUsers =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_USERS, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/users`,
        params,
      });

      dispatch({ type: actionType.FETCH_USERS_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_USERS, payload: false });
    }
  };
export const getUserList = (params = {}) => {
  return api({
    method: "get",
    url: `/users`,
    params,
  });
};
export const actionAddUser = (data = {}) => {
  return api({
    method: "post",
    url: `/users`,
    data,
  });
};

export const actionEditUser = (data = {}, id) => {
  return api({
    method: "put",
    url: `/users/${id}`,
    data,
  });
};

export const actionDeleteUser = (id) => {
  return api({
    method: "delete",
    url: `/users/${id}`,
  });
};