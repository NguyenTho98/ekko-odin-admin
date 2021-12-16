import * as actions from "../../utility/constants/actions";

const initialState = {
  emailss: {},
  isFetching: false,
};

const emails = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_EMAILS:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_EMAILS_DONE:
      return { ...state, emailss: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default emails;
