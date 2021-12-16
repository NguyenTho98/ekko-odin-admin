import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetAttendants =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_ATTENDANT, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/attendant`,
        params,
      });

      dispatch({ type: actionType.FETCH_ATTENDANT_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_ATTENDANT, payload: false });
    }
  };
export const getAttendantDetail = (id) => {
  return api({
    method: "get",
    url: `/attendant/${id}`
  });
};
export const getAttendantList = (id) => {
  return api({
    method: "get",
    url: `/attendant?classes_id=${id}`,
  });
};
export const actionAddAttendant = (data = {}) => {
  return api({
    method: "post",
    url: `/attendant`,
    data,
  });
};

export const actionEditAttendant = (data = {}, id) => {
  return api({
    method: "put",
    url: `/attendant/${id}`,
    data,
  });
};

export const actionDeleteAttendant = (id) => {
  return api({
    method: "delete",
    url: `/attendant/${id}`,
  });
};