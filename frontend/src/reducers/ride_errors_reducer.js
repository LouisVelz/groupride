import {
    RECEIVE_RIDE_ERRORS,
    RECEIVE_RIDE,
} from '../actions/ride_actions';

const _nullErrors = [];

const RidesErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RIDE_ERRORS:
            return action.errors;
        case RECEIVE_RIDE:
            return _nullErrors;
        default:
            return state;
    }
};

export default RidesErrorsReducer;