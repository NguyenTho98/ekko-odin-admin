import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetTeacherss =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_STUDENTCARE, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/teachers`,
        params,
      });

      dispatch({ type: actionType.FETCH_STUDENTCARE_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_STUDENTCARE, payload: false });
    }
  };
export const getTeachersList = (params = {}) => {
  return api({
    method: "get",
    url: `/teachers`,
    params,
  });
};
export const actionAddTeachers = (data = {}) => {
  return api({
    method: "post",
    url: `/teachers`,
    data,
  });
};

export const actionEditTeachers = (data = {}, id) => {
  return api({
    method: "put",
    url: `/teachers/${id}`,
    data,
  });
};

export const actionDeleteTeachers = (id) => {
  return api({
    method: "delete",
    url: `/teachers/${id}`,
  });
};