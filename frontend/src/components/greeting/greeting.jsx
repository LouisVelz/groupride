import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';



export default (props) => {

    const welcomePage = props.loggedIn ? (
       <div>
           <h1>Logged in page</h1>
            <Link to="" className="loggedin-logout" onClick={props.logout}>Log Out</Link>
       </div>
    ) : (
        <div>
            <h1>Splash page</h1>
            {/* <a href="#/login">Login</a>
            <a href="#/signup">Sign Up</a> */}
            <Link className="signup-btn" to="" onClick={() => props.openModal('signup')}>Join</Link>
            <Link className="login-btn" to="" onClick={() => props.openModal('login')}>Log In</Link>
        </div>
    );

    return (
        <header className="greeting">
            <div>
                {welcomePage}
            </div>
        </header>
    );
}

