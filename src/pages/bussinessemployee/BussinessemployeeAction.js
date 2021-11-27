import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetBussinessemployees =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_BUSSINESSEMPLOYEE, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/bussinessemployee`,
        params,
      });

      dispatch({ type: actionType.FETCH_BUSSINESSEMPLOYEE_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_BUSSINESSEMPLOYEE, payload: false });
    }
  };
export const getBussinessemployeeList = (params = {}) => {
  return api({
    method: "get",
    url: `/bussinessemployee`,
    params,
  });
};
export const actionAddBussinessemployee = (data = {}) => {
  return api({
    method: "post",
    url: `/bussinessemployee`,
    data,
  });
};

export const actionEditBussinessemployee = (data = {}, id) => {
  return api({
    method: "put",
    url: `/bussinessemployee/${id}`,
    data,
  });
};

export const actionDeleteBussinessemployee = (id) => {
  return api({
    method: "delete",
    url: `/bussinessemployee/${id}`,
  });
};