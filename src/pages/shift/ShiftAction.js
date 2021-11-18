import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetShifts =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_CENTER, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/shift`,
        params,
      });

      dispatch({ type: actionType.FETCH_CENTER_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_CENTER, payload: false });
    }
  };
export const getShiftList = (id) => {
  return api({
    method: "get",
    url: `/shift?classes=${id}`,
  });
};
export const actionAddShift = (data = {}) => {
  return api({
    method: "post",
    url: `/shift`,
    data,
  });
};

export const actionEditShift = (data = {}, id) => {
  return api({
    method: "put",
    url: `/shift/${id}`,
    data,
  });
};


export const actionDetailShift = (id) => {
  return api({
    method: "get",
    url: `/shift/${id}`
  });
};

export const actionDeleteShift = (id) => {
  return api({
    method: "delete",
    url: `/shift/${id}`,
  });
};