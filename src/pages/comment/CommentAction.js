import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetComments =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_COMMENT, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/comment`,
        params,
      });

      dispatch({ type: actionType.FETCH_COMMENT_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_COMMENT, payload: false });
    }
  };
export const getCommentList = (params = {}) => {
  return api({
    method: "get",
    url: `/comment`,
    params,
  });
};
export const actionAddComment = (data = {}) => {
  return api({
    method: "post",
    url: `/comment`,
    data,
  });
};

export const actionEditComment = (data = {}, id) => {
  return api({
    method: "put",
    url: `/comment/${id}`,
    data,
  });
};

export const actionDeleteComment = (id) => {
  return api({
    method: "delete",
    url: `/comment/${id}`,
  });
};