import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetEmailss =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_EMAILS, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/emails`,
        params,
      });

      dispatch({ type: actionType.FETCH_EMAILS_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_EMAILS, payload: false });
    }
  };
export const getEmailsList = (params = {}) => {
  return api({
    method: "get",
    url: `/emails`,
    params,
  });
};
export const actionAddEmails = (data = {}) => {
  return api({
    method: "post",
    url: `/emails`,
    data,
  });
};

export const actionEditEmails = (data = {}, id) => {
  return api({
    method: "put",
    url: `/emails/${id}`,
    data,
  });
};

export const actionDeleteEmails = (id) => {
  return api({
    method: "delete",
    url: `/emails/${id}`,
  });
};