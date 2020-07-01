import { connect } from 'react-redux';
import rideIndex from './rides_index';
import { fetchRides, updateRide, trashRide, leaveRide } from "../../actions/ride_actions";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
    return {
        rides: Object.values(state.entities.rides),
        currentUser: state.session.user,
    }
};

const mDTP = dispatch => {
    return {

        fetchRides: () => dispatch(fetchRides()),
        updateRide: (ride) => dispatch(updateRide(ride)),
        logout: () => dispatch(logout()),
        trashRide: (rideId) => dispatch(trashRide(rideId)),
        leaveRide: (ride) => dispatch(leaveRide(ride))

    }
};

export default connect(mSTP, mDTP)(rideIndex);