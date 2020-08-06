import { connect } from "react-redux";
import { fetchUserRides, getUser } from './../../actions/ride_actions'
import UserPage from "./user";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  const { entities } = state;
  const userId = ownProps.match.params.userId;
  let changedState;
  if (state.entities.users[userId] === undefined) {
    if (localStorage.getItem("newState") === null) {
      changedState = state.session.user;
    } else {
      changedState = JSON.parse(localStorage.getItem("newState"));
    }
  } else {
    localStorage.setItem("newState", JSON.stringify(state.entities.users[userId]));
    changedState = state.entities.users[userId];
  }

  return {
    errors: state.errors.session,
    currentUser: state.session.user,
    changedUser: changedState,
    rides: Object.values(entities.rides.user),
  };
};

const mDTP = dispatch => {
  return {
    fetchUserRides: (id) => dispatch(fetchUserRides(id)),
    openModal: (str) => dispatch(openModal(str)),
    getUser: (userId) => dispatch(getUser(userId)),
  };
}

export default withRouter(connect(mSTP, mDTP)(UserPage));


