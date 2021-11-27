import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetStudentcares =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_STUDENTCARE, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/studentcare`,
        params,
      });

      dispatch({ type: actionType.FETCH_STUDENTCARE_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_STUDENTCARE, payload: false });
    }
  };
export const getStudentcareList = (params = {}) => {
  return api({
    method: "get",
    url: `/studentcare`,
    params,
  });
};
export const actionAddStudentcare = (data = {}) => {
  return api({
    method: "post",
    url: `/studentcare`,
    data,
  });
};

export const actionEditStudentcare = (data = {}, id) => {
  return api({
    method: "put",
    url: `/studentcare/${id}`,
    data,
  });
};

export const actionDeleteStudentcare = (id) => {
  return api({
    method: "delete",
    url: `/studentcare/${id}`,
  });
};