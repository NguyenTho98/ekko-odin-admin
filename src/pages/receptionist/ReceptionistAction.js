import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetReceptionists =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_RECEPTIONIST, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/receptionist`,
        params,
      });

      dispatch({ type: actionType.FETCH_RECEPTIONIST_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_RECEPTIONIST, payload: false });
    }
  };
export const getReceptionistList = (params = {}) => {
  return api({
    method: "get",
    url: `/receptionist`,
    params,
  });
};
export const actionAddReceptionist = (data = {}) => {
  return api({
    method: "post",
    url: `/receptionist`,
    data,
  });
};

export const actionEditReceptionist = (data = {}, id) => {
  return api({
    method: "put",
    url: `/receptionist/${id}`,
    data,
  });
};

export const actionDeleteReceptionist = (id) => {
  return api({
    method: "delete",
    url: `/receptionist/${id}`,
  });
};