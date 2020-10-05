import {
  RECEIVE_RIDES,
  RECEIVE_USER_RIDES,
  RECEIVE_NEW_RIDE,
  RECEIVE_RIDE,
  REMOVE_RIDE,
  EXIT_RIDE,
  JOIN_RIDE
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

    case REMOVE_RIDE:
      const filtered = newState.all.filter(ride => ride._id !== action.rideId);
      newState.all = filtered;
      return newState;

    case EXIT_RIDE:
      debugger
      let data = JSON.parse(action.data.config.data)
      newState.all.forEach(ride => {
        if (ride._id === data.id) {
          const removed = ride.participants.filter(participant => participant !== data.currentUser)
          ride.participants = removed;
        }
      });
      return newState;

    case JOIN_RIDE:
      debugger
      const data1 = JSON.parse(action.ride.config.data)
      newState.all.forEach(ride => {
        if(ride._id === data1.id){
          ride.participants.push(data1.currentUser);
        } 
      });
      return newState;

    default:
      return state;
  }
};

export default ridesReducer;
