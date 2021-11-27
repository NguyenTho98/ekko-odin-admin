import * as actions from "../../utility/constants/actions";

const initialState = {
  receptionists: {},
  isFetching: false,
};

const receptionist = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_RECEPTIONIST:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_RECEPTIONIST_DONE:
      return { ...state, receptionists: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default receptionist;
