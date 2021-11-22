import cookie from "js-cookie";
import * as actions from "../../utility/constants/actions";

const initialState = {
  isLoading: false,
  profile: {},
};

const system = (state = initialState, action) => {
  switch (action.type) {
     case actions.TOGGLE_LOADING:
      return { ...state, isLoading: action.payload };
    case actions.FETCH_PROFILE:
        console.log("action.payload", action.payload);
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default system;
