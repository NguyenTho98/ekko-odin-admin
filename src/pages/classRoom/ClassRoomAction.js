import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";
export const actionGetClassRooms =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.FETCHING_CENTER, payload: true });
      const { data = {} } = await api({
        method: "get",
        url: `/classroom`,
        params,
      });

      dispatch({ type: actionType.FETCH_CENTER_DONE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.FETCHING_CENTER, payload: false });
    }
  };
export const getClassRoomList = (params = {}) => {
  return api({
    method: "get",
    url: `/classroom`,
    params,
  });
};
export const actionAddClassRoom = (data = {}) => {
  return api({
    method: "post",
    url: `/classroom`,
    data,
  });
};

export const actionEditClassRoom = (data = {}, id) => {
  return api({
    method: "put",
    url: `/classroom/${id}`,
    data,
  });
};

export const actionDeleteClassRoom = (id) => {
  return api({
    method: "delete",
    url: `/classroom/${id}`,
  });
};