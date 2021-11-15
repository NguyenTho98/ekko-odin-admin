import * as actions from "../../utility/constants/actions";

const initialState = {
  courses: {},
  isFetching: false,
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_CENTER:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_CENTER_DONE:
      return { ...state, courses: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default course;
