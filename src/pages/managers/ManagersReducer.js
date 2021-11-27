import * as actions from "../../utility/constants/actions";

const initialState = {
  managerss: {},
  isFetching: false,
};

const managers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_MANAGERS:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_MANAGERS_DONE:
      return { ...state, managerss: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default managers;
