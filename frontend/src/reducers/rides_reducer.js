import {
  RECEIVE_RIDES,
  RECEIVE_USER_RIDES,
  RECEIVE_NEW_RIDE,
  RECEIVE_RIDE,
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
    case RECEIVE_RIDE:
      return Object.assign({}, state, {[action.ride.data._id]: action.ride.data})
    default:
      return state;
  }
};

export default ridesReducer;
