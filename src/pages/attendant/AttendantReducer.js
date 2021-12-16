import * as actions from "../../utility/constants/actions";

const initialState = {
  attendants: {},
  isFetching: false,
};

const attendant = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_ATTENDANT:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_ATTENDANT_DONE:
      return { ...state, attendants: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default attendant;
