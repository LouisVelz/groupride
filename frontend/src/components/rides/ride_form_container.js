import { connect } from 'react-redux';
import RideForm from './ride_form';
import { createRide } from '../../actions/ride_actions';


const mSTP = (state) => {
    return {
        ride: {
            title: "",
            description: "",
            destination: "",
            meetup_location: "",
            meetup_time: "",
            purpose: "",
        },
        formType: 'Create GroupRide'
    }
};

const mDTP = dispatch => {
    return {

        createRide: (ride) => dispatch(createRide(ride))
    }
};

export default connect(mSTP, mDTP)(RideForm);