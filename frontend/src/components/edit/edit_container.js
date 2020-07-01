import { connect } from "react-redux";
import { updateUser, getUser } from '../../actions/ride_actions';
import { closeModal } from '../../actions/modal_actions';
import EditForm from "../edit/edit_form";

const mSTP = (state) => {

    return {
        currentUser: state.session.user,
        description: { 
            bike_type: state.session.user.bike_type || "",
            skill_level: state.session.user.skill_level || "",
            social_media: state.session.user.social_media || "",
        }
    };
};

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal()),
        getUser: (userId) => dispatch(getUser(userId)),

    }
}

export default connect(mSTP, mDTP)(EditForm);
