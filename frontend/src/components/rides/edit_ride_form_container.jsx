import React from 'react';
import { connect } from 'react-redux';
import { fetchRide, updateRide } from '../../actions/ride_actions';
import RideForm from './ride_form';

class EditRideForm extends React.Component {

    componentDidMount() {
        this.props.fetchRide(this.props.match.params.rideId)

    }

    render() {
        // DO NOT MODIFY THIS FUNCTION
        const { updateRide, formType, ride } = this.props;

        // Hint: The Ride will not exist on the first render - what do we need to 
        // do to get it?
        if (!ride) return null;
        return (
            <RideForm
                updateRide={updateRide}
                formType={formType}
                ride={ride} />
        );
    }
}

const mSTP = (state, ownProps) => ({
    // ride: state.rides[ownProps.match.params.rideId],
    formType: 'Update Ride'
});

const mDTP = dispatch => ({
    fetchRide: (rideId) => dispatch(fetchRide(rideId)),
    updateRide: (ride) => dispatch(updateRide(ride))
});

export default connect(mSTP, mDTP)(EditRideForm);