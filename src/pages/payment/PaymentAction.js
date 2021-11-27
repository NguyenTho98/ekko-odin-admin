import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetPayments =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_PAYMENT, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/payment`,
        params,
      });

      dispatch({ type: actionType.FETCH_PAYMENT_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_PAYMENT, payload: false });
    }
  };
export const getPaymentList = (params = {}) => {
  return api({
    method: "get",
    url: `/payment`,
    params,
  });
};
export const getPaymentDetail = (id) => {
  return api({
    method: "get",
    url: `/payment/${id}`
  });
};
export const actionAddPayment = (data = {}) => {
  return api({
    method: "post",
    url: `/payment`,
    data,
  });
};

export const actionEditPayment = (data = {}, id) => {
  return api({
    method: "put",
    url: `/payment/${id}`,
    data,
  });
};

export const actionDeletePayment = (id) => {
  return api({
    method: "delete",
    url: `/payment/${id}`,
  });
};