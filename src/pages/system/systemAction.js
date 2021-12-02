import api from "../../utility/service/api";
import * as actionType from "../../utility/constants/actions";

export const actionToggleLoading = (isLoading = false) => {
  return {
    type: actionType.TOGGLE_LOADING,
    payload: isLoading,
  };
};

export const getUserInfo = (history) => async (dispatch) => {
  try {
    // dispatch(actionToggleLoading(true));
    const { data } = await api({
      method: "get",
      url: `/auth/users/whoami`,
    });
    dispatch({ type: actionType.FETCH_PROFILE, payload: data });
    // dispatch(actionToggleLoading(false));
    if (history) {
      history.push("/dashboard/classes");
    }
  } catch (error) {
    console.log(error);
    // dispatch(actionToggleLoading(false));
  }
};

export const actionUploadFile = (formData) => {
  return api({
    method: "post",
    url: `/admin/file/upload`,
    data: formData,
  });
};
