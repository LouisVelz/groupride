import { connect } from "react-redux";
import { updateUser } from '../../actions/ride_actions';
import EditForm from "../edit/edit_form";

const mSTP = (state) => {
    const { session } = state;
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    }
}

export default connect(mSTP, mDTP)(EditForm);
