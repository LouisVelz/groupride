import {
  RECEIVE_RIDES,
  RECEIVE_USER_RIDES,
  RECEIVE_NEW_RIDE,
  RECEIVE_RIDE,
  // RECEIVE_PARTICIPANTS,
  REMOVE_RIDE,
  // RECEIVE_RIDE_ERRORS,
} from "../actions/ride_actions";


const ridesReducer = (
  state = { all: {}, user: {}, new: undefined, participants: {} },
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
      // case RECEIVE_PARTICIPANTS:
      //   return Object.assign({}, state, action.participants)
    case REMOVE_RIDE:
      delete newState[action.rideId];
      return newState;
    default:
      return state;
  }
};

export default ridesReducer;
