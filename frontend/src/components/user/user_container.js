import { connect } from "react-redux";
import { fetchUserRides } from './../../actions/ride_actions'
import UserPage from "./user";

const mSTP = (state) => {
  const { entities, session } = state;
  return {
    errors: state.errors.session,
    currentUser: entities.users[session.user.id],
    rides: Object.values(entities.rides.user)
  };
};

const mDTP = dispatch => {
  return {
    fetchUserRides: (id) => dispatch(fetchUserRides(id))
  }
}

export default connect(mSTP, mDTP)(UserPage);


