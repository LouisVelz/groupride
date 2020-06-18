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
    // let bike = <FontAwesomeIcon icon={faBiking} size="2x" />;
    const { props } = this;
    console.log(this.props.currentUser)

    const welcomePage = props.loggedIn ? (
      <div className="nav-home-container">
        <div className="left-nav">
          <a className="nav-logo" href="/index"><h1>GroupRide</h1></a>  
          <a className="bike-logo" ><FontAwesomeIcon icon={faBiking} size="2x" /></a>
        </div>
        <div className="right-nav">
          <div className="dropdown">
            <button className="dropbtn"> D{this.props.currentUser._id} 
              <ul className="dropdown-content">
                <div className="user-name">Demo User{this.props.currentUser._id}</div>

                <div className="link-items">
                  <Link className="link" to={`/user/${this.props.currentUser._id}`}>Profile</Link>
                  <Link className="link" to={`/ride/new`}>Create Ride</Link>
                </div>
                <Link to="" id="nav-logout" onClick={props.logout}>Log Out</Link>
              </ul>
            </button>
          </div>
        </div>
        {/* <ul>
          <li>
            <h1 className="nav-logo">GroupRide</h1>
          </li>
          <li><button onClick={this.handleClick.bind(this)}>{bike}</button>
            {this.state.open && (<div className="dropdown">
              <ul> */}
                  {/* <li><Link to={`/users/${this.props.currentUser._id}`}>{this.props.currentUser.username}</Link></li> */}
                  {/* <li>Username</li>
                  <li><Link to ={`/ride/new`}>Create Ride</Link></li>
                  <li><Link to ={`/user/${props.currentUser._id}`}>User Info</Link></li>
                  <li><button onClick={() => props.logout}>Log Out</button></li>
                </ul>
              </div>
            )}
          </li>
        </ul> */}
       
        {/* <Link to="" className="loggedin-logout" onClick={props.logout}>
          Log Out
        </Link> */}
      </div>
    ) : (
      <div id="nav-splash-container">
        <h1 className="nav-logo">GroupRide</h1>
        {/* <a href="#/login">Login</a>
            <a href="#/signup">Sign Up</a> */}
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

