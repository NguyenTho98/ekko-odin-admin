import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetManagerss =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_MANAGERS, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/managers`,
        params,
      });

      dispatch({ type: actionType.FETCH_MANAGERS_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_MANAGERS, payload: false });
    }
  };
export const getManagersList = (params = {}) => {
  return api({
    method: "get",
    url: `/managers`,
    params,
  });
};
export const actionAddManagers = (data = {}) => {
  return api({
    method: "post",
    url: `/managers`,
    data,
  });
};

export const actionEditManagers = (data = {}, id) => {
  return api({
    method: "put",
    url: `/managers/${id}`,
    data,
  });
};

export const actionDeleteManagers = (id) => {
  return api({
    method: "delete",
    url: `/managers/${id}`,
  });
};