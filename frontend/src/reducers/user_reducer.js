import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER} from "./../actions/ride_actions"

const usersReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return Object.assign({}, action.users.data.participants);
    case RECEIVE_USER:
      const { user } = action;
      return Object.assign({}, state, { [user.data._id]: user.data });
    default:
      return state;
  }
};

export default usersReducer;
