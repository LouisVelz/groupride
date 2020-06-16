import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/splash/splash-nav.css'
// import { openModal } from '../../actions/modal_actions';



export default (props) => {

    const welcomePage = props.loggedIn ? (
       <div className="nav-home-container">
           <h1>Logged in page</h1>
            <Link to="" className="loggedin-logout" onClick={props.logout}>Log Out</Link>
       </div>
    ) : (
        <div id="nav-splash-container">
            <h1 className="nav-logo">GroupRide</h1>
            {/* <a href="#/login">Login</a>
            <a href="#/signup">Sign Up</a> */}
            <div className="singup-login">
                <Link className="signup-btn" to="" onClick={() => props.openModal('signup')}>Sign Up</Link>
                <Link className="login-btn" to="" onClick={() => props.openModal('login')}>Log In</Link>
            </div>
        </div>
    );

    return (
        <header className="greeting">
            <div className="nav">
                {welcomePage}
            </div>
        </header>
    );
}

