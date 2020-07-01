import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../stylesheets/edit/edit.css'

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.currentUser._id,
            bike_type: "",
            skill_level: "",
            social_media: "",
        };
        // debugger
        // this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    // handleClick() {
    //     this.setState({ open: !this.state.open });
    // }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        }
    }
    
    componentDidUpdate() {
        this.props.getUser(this.props.currentUser._id);

    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            id: this.state.id,
            bike_type: this.state.bike_type,
            skill_level: this.state.skill_level,
            social_media: this.state.social_media,
        };

        this.props.updateUser(user)
            .then(() => this.props.history.push(`/user/${this.props.currentUser._id}`))
            .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-form">
                        <h2 className="form-header">Edit Profile</h2>
                        <br />
                        <input type="text"
                            value={this.state.bike_type}
                            onChange={this.update('bike_type')}
                            placeholder="Your bike type"
                        />
                        <br />
                        <input type="text"
                            value={this.state.skill_level}
                            onChange={this.update('skill_level')}
                            placeholder="Your skill level"
                        />
                        <br />
                        <input type="url"
                            className="social-media-link"
                            value={this.state.social_media}
                            onChange={this.update('social_media')}
                            placeholder="Social media link"
                        />
                        <br />
                        <input id="edit-submit" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(EditForm);