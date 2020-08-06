import { connect } from 'react-redux';
import RideForm from './ride_form';
import { createRide } from '../../actions/ride_actions';


const mSTP = (state) => {
    return {
        errors: state.errors.ride,
        currentUser: state.session.user,
        ride: {
            title: "",
            description: "",
            destination: "",
            meetup_location: "",
            meetup_time: "",
            purpose: "",
            // participants: "",
        },
        formType: 'Create Ride'
    }
};

const mDTP = dispatch => {
    return {
      createRide: (ride) => dispatch(createRide(ride)),
    //   updateRide: (ride) => dispatch(updateRide(ride)),
    };
};

export default connect(mSTP, mDTP)(RideForm);