import * as actions from "../../utility/constants/actions";

const initialState = {
  payments: {},
  isFetching: false,
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_PAYMENT:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_PAYMENT_DONE:
      return { ...state, payments: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default payment;
