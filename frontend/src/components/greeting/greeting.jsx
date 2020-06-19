import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/splash/splash-nav.css'
import '../../stylesheets/greeting/greeting_nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";



class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { props } = this;
    const welcomePage = props.loggedIn ? (
      <div className="nav-home-container">
        <div className="left-nav">
          <Link to="/index" className="nav-logo">
            <h1>GroupRide</h1>
          </Link>

            <Link to="/index" className="bike-logo">
              <FontAwesomeIcon icon={faBiking} size="2x" />
            </Link>

        </div>
        <div className="right-nav">
          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              {this.props.currentUser.username[0]}
              <ul className="dropdown-content">
                <div className="user-name">
                  {this.props.currentUser.username}
                </div>

                <div className="link-items">
                  <Link
                    className="link"
                    to={`/user/${this.props.currentUser._id}`}
                  >
                    Profile
                  </Link>
                  <Link className="link" to={`/ride/new`}>
                    Create Ride
                  </Link>
                </div>
                <Link to="" id="nav-logout" onClick={props.logout}>
                  Log Out
                </Link>
              </ul>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div id="nav-splash-container">
        <div className="left-nav">
          <a className="nav-logo" href="/index">
            <h1>GroupRide</h1>
          </a>
          <a className="bike-logo" href="/index">
            <FontAwesomeIcon icon={faBiking} size="2x" />
          </a>
        </div>
        <div className="singup-login">
          <Link
            className="signup-btn"
            to=""
            onClick={() => props.openModal("signup")}
          >
            Sign Up
          </Link>
          <Link
            className="login-btn"
            to=""
            onClick={() => props.openModal("login")}
          >
            Log In
          </Link>
        </div>
      </div>
    );

    return (
      <header className="greeting">
        <div className="nav">{welcomePage}</div>
      </header>
    );
  }
}

export default Greeting;

