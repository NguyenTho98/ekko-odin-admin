import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetStudents =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_STUDENT, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/students`,
        params,
      });

      dispatch({ type: actionType.FETCH_STUDENT_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_STUDENT, payload: false });
    }
  };
export const getStudentList = (params = {}) => {
  return api({
    method: "get",
    url: `/students`,
    params,
  });
};
export const actionAddStudent = (data = {}) => {
  return api({
    method: "post",
    url: `/students`,
    data,
  });
};

export const actionEditStudent = (data = {}, id) => {
  return api({
    method: "put",
    url: `/students/${id}`,
    data,
  });
};

export const actionDeleteStudent = (id) => {
  return api({
    method: "delete",
    url: `/students/${id}`,
  });
};