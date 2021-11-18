import * as actions from "../../utility/constants/actions";

const initialState = {
  classess: {},
  isFetching: false,
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_CENTER:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_CENTER_DONE:
      return { ...state, classess: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default classes;
