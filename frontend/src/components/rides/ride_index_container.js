import { connect } from 'react-redux';
import rideIndex from './rides_index';
import { fetchRides } from '../../actions/ride_actions';
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
    return {
        rides: Object.values(state.entities.rides)
    }
};

const mDTP = dispatch => {
    return {

        fetchRides: () => dispatch(fetchRides()),
        logout: () => dispatch(logout()),
    }
};

export default connect(mSTP, mDTP)(rideIndex);