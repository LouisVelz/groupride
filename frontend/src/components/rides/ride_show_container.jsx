import { connect } from "react-redux";
import { fetchRide, fetchParticipants, getUser } from "./../../actions/ride_actions";
import RideShow from "./ride_show";

const mSTP = (state, ownProps) => {
  return {
    ride: state.entities.rides[ownProps.match.params.rideId],
    participants: Object.values(state.entities.users),
    // creator: state.entities.rides[ownProps.match.params.rideId]
  };
};

const mDTP = (dispatch) => ({
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
  fetchParticipants: (rideId) => dispatch(fetchParticipants(rideId)),
  getUser: (userId) =>  dispatch(getUser(userId))

});

export default connect(mSTP, mDTP)(RideShow);
