import {
  RECEIVE_RIDES,
  RECEIVE_USER_RIDES,
  RECEIVE_NEW_RIDE,
} from "../actions/ride_actions";


const ridesReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RIDES:
      newState.all = action.rides.data;
      return newState;
    case RECEIVE_USER_RIDES:
      newState.user = action.rides.data;
      return newState;
    case RECEIVE_NEW_RIDE:
      newState.new = action.ride.data;
      return newState;
    default:
      return state;
  }
};

export default ridesReducer;
