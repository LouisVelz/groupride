import { connect } from 'react-redux';
import rideIndex from './rides_index';
<<<<<<< HEAD
import { fetchRides, updateRide } from "../../actions/ride_actions";
=======
import { fetchRides, updateRide } from '../../actions/ride_actions';
>>>>>>> f21deb3f8876a55c5064579fffb7c2396d2cb7ec
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
    return {
        rides: Object.values(state.entities.rides),
<<<<<<< HEAD
        currentUser: state.session.user,
=======
        currentUser: state.session.user
>>>>>>> f21deb3f8876a55c5064579fffb7c2396d2cb7ec
    }
};

const mDTP = dispatch => {
    return {

        fetchRides: () => dispatch(fetchRides()),
        updateRide: (ride) => dispatch(updateRide(ride)),
        logout: () => dispatch(logout()),
        updateRide: (ride) => dispatch(updateRide(ride))
    }
};

export default connect(mSTP, mDTP)(rideIndex);