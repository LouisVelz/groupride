import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => {

    return {
        loggedIn: state.session.isAuthenticated
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (str) => dispatch(openModal(str)),
});


export default connect(mSTP, mDTP)(Greeting);