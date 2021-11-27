import * as actions from "../../utility/constants/actions";

const initialState = {
  bussinessemployees: {},
  isFetching: false,
};

const bussinessemployee = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_BUSSINESSEMPLOYEE:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_BUSSINESSEMPLOYEE_DONE:
      return { ...state, bussinessemployees: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default bussinessemployee;
