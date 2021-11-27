import * as actions from "../../utility/constants/actions";

const initialState = {
  teacherss: {},
  isFetching: false,
};

const teachers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_STUDENTCARE:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_STUDENTCARE_DONE:
      return { ...state, teacherss: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default teachers;
