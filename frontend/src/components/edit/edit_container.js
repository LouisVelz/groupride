import { connect } from "react-redux";
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateUser, fetchUserRides } from '../../actions/ride_actions'
import EditForm from "../edit/edit_form";

const mSTP = (state) => {
    const { session } = state;
    // debugger
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    // debugger
    return {
        // fetchUser: (id) => dispatch(fetchUser(id)),
        updateUser: (user) => dispatch(updateUser(user)),
        // closeModal: () => dispatch(closeModal()),
        // openModal: (str) => dispatch(openModal(str)),
    }
}

export default connect(mSTP, mDTP)(EditForm);
