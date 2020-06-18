import React from 'react';
import { withRouter } from 'react-router-dom';
import './forms.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {

            this.props.history.push('/index');
            this.props.closeModal();
        }
        
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
            .then(() => {
            // if (Object.keys(this.state.errors).length === 0) {
                this.props.login(user)
            // } else {

            // }
        });
    }

    renderErrors() {
    let errorList;
    let errorsClass;
    if (this.props.errors === undefined || this.props.errors.length == 0) {
      errorList = null;
      errorsClass = "no-errors"
    } else {
      errorsClass = "errors"
      errorList = Object.values(this.state.errors).map((error, i) => {
        return (
          <li key={`error-${i}`}>{error}</li>
        );
      });

        return (
            <ul className={errorsClass}>
            {errorList}
            </ul>
        );
        }
    }

    //     return (
    //         <ul>
    //             {Object.keys(this.props.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {this.props.error[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <h2 className="form-header">Join GroupRide</h2>
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="First and Last names"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input id="submit-button" type="submit" value="Sign Up" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);