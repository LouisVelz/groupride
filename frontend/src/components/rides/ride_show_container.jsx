import { connect } from "react-redux";
import { fetchRide } from "./../../actions/ride_actions";
import RideShow from "./song_show";

const mSTP = (state, ownProps) => {
  return {
    ride: state.entities.rides[ownProps.match.params.rideId],
  };
};

const mDTP = (dispatch) => ({
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
});

export default connect(mSTP, mDTP)(RideShow);
