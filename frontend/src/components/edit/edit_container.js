import { connect } from "react-redux";
import { updateUser, getUser } from '../../actions/ride_actions';
import { closeModal } from '../../actions/modal_actions';
import EditForm from "../edit/edit_form";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    const { entities, session } = state;
    const userId = session.user._id;
    let changedState;
    if (entities.users[userId] === undefined) {
        if (localStorage.getItem("newState") === null) {
            changedState = session.user;
        } else {
            changedState = JSON.parse(localStorage.getItem("newState"));
        }
    } else {
        localStorage.setItem("newState", JSON.stringify(entities.users[userId]));
        changedState = entities.users[userId];
    }
    return {
        currentUser: state.session.user,
        bike_type: changedState.bike_type,
        skill_level: changedState.skill_level,
        social_media: changedState.social_media,
    };
};

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal()),
        getUser: (userId) => dispatch(getUser(userId)),

    }
}

export default withRouter(connect(mSTP, mDTP)(EditForm));
