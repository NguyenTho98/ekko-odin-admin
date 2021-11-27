import * as actions from "../../utility/constants/actions";

const initialState = {
  studentcares: {},
  isFetching: false,
};

const studentcare = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_STUDENTCARE:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_STUDENTCARE_DONE:
      return { ...state, studentcares: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default studentcare;
