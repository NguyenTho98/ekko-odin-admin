import * as actions from "../../utility/constants/actions";

const initialState = {
  comments: {},
  isFetching: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_COMMENT:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_COMMENT_DONE:
      return { ...state, comments: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default comment;
