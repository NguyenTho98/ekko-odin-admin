import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetContracts =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_PAYMENT, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/contract`,
        params,
      });

      dispatch({ type: actionType.FETCH_PAYMENT_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_PAYMENT, payload: false });
    }
  };
export const getContractDetail = (id) => {
  return api({
    method: "get",
    url: `/contract/${id}`
  });
};
export const getContractList = (params = {}) => {
  return api({
    method: "get",
    url: `/contract`,
    params,
  });
};
export const actionAddContract = (data = {}) => {
  return api({
    method: "post",
    url: `/contract`,
    data,
  });
};

export const actionEditContract = (data = {}, id) => {
  return api({
    method: "put",
    url: `/contract/${id}`,
    data,
  });
};

export const actionDeleteContract = (id) => {
  return api({
    method: "delete",
    url: `/contract/${id}`,
  });
};