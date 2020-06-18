import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/ride_actions'
import EditForm from "./user";

const mSTP = (state) => {
    const { session } = state;
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(EditForm);
