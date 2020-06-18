import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";
import { RECEIVE_USERS} from "./../actions/ride_actions"

const usersReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });

    case RECEIVE_USERS:
      return Object.assign({}, action.users.data.participants)
    default:
      return state;
  }
};

export default usersReducer;
