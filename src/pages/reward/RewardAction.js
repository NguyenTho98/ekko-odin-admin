import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetRewards =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_REWARD, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/reward`,
        params,
      });

      dispatch({ type: actionType.FETCH_REWARD_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_REWARD, payload: false });
    }
  };
export const getRewardList = (params = {}) => {
  return api({
    method: "get",
    url: `/reward`,
    params,
  });
};
export const actionAddReward = (data = {}) => {
  return api({
    method: "post",
    url: `/reward`,
    data,
  });
};

export const actionEditReward = (data = {}, id) => {
  return api({
    method: "put",
    url: `/reward/${id}`,
    data,
  });
};

export const actionDeleteReward = (id) => {
  return api({
    method: "delete",
    url: `/reward/${id}`,
  });
};