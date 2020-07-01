import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import RidesErrorsReducer from './ride_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    ride: RidesErrorsReducer,
});