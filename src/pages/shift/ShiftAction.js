import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetClassess =
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
export const getClassesList = (id) => {
  return api({
    method: "get",
    url: `/shift?classes=${id}`,
  });
};
export const actionAddClasses = (data = {}) => {
  return api({
    method: "post",
    url: `/shift`,
    data,
  });
};

export const actionEditClasses = (data = {}, id) => {
  return api({
    method: "put",
    url: `/shift/${id}`,
    data,
  });
};


export const actionDetailClasses = (id) => {
  return api({
    method: "get",
    url: `/shift/${id}`
  });
};

export const actionDeleteClasses = (id) => {
  return api({
    method: "delete",
    url: `/shift/${id}`,
  });
};