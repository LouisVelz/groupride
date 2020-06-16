import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";

const usersReducer = (state = {}, action) => {
  console.log(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
