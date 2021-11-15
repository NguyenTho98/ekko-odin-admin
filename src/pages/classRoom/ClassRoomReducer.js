import * as actions from "../../utility/constants/actions";

const initialState = {
  classRooms: {},
  isFetching: false,
};

const classRoom = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_CENTER:
      return { ...state, isFetching: action.payload || false };
    case actions.FETCH_CENTER_DONE:
      return { ...state, classRooms: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default classRoom;
