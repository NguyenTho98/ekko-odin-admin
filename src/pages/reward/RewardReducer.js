import * as actions from "../../utility/constants/actions";

const initialState = {
  rewards: {},
  isFetching: false,
};

const reward = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_REWARD:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_REWARD_DONE:
      return { ...state, rewards: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default reward;
