import { connect } from "react-redux";
import { fetchUserRides } from './../../actions/ride_actions'
import UserPage from "./user";
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  const { entities } = state;
  return {
    errors: state.errors.session,
    currentUser: state.session.user,
    rides: Object.values(entities.rides.user),
  };
};

const mDTP = dispatch => {
  return {
    fetchUserRides: (id) => dispatch(fetchUserRides(id)),
    openModal: (str) => dispatch(openModal(str)),
  }
}

export default connect(mSTP, mDTP)(UserPage);


