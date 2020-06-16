import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

//Styling
import '../../stylesheets/splash/splash.scss';
import splashTop1 from '../images/fitIndia.png';
import splashTop2 from "../images/helpingRide.png";
import splashTop3 from "../images/friendsRide.png";
import splashTop4 from "../images/fingerAir.png";
import splashMid1 from "../images/highfive.png";
import splashMid2 from "../images/splashphone.png";


const mSTP = state => {
  return {
    loggedIn: state.session.isAuthenticated,
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (str) => dispatch(openModal(str)),
});


class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash-page">
        <section className="splash-container">
          <section className="splash-top-content">
            <div id="splash-img-container">
              <img
                src={splashTop1}
                className="splash-top-logo1"
                alt="splash top1"
              />
              <img
                src={splashTop2}
                className="splash-top-logo2"
                alt="splash top2"
              />
              <img
                src={splashTop3}
                className="splash-top-logo3"
                alt="splash top3"
              />
              <img
                src={splashTop4}
                className="splash-top-logo4"
                alt="splash top4"
              />
              <div className="splash-top-context">
                <h1>GroupRide...</h1>
                <p>A New Way To Socially Interact With Others.</p>
                <p> Where Your Solo Rides</p>
                <p>Can Become Group Marathons!</p>
                <button className="splash-top-link1">
                  <Link
                    to=""
                    onClick={() => this.props.openModal("signup")}
                    id="splash-top-link"
                  >
                    Join the Community →
                  </Link>
                </button>
                <button className="splash-top-link2">
                  <Link to="/" id="splash-top-link">
                    Try our Demo →
                  </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="splash-middle-content">
            <div id="splash-middle-1">
              <div>
                <h2>Don't Bike Alone!</h2>
                <p>
                  - Riding alone can be dangerous, especially in cities with
                  large traffics.
                </p>
                <p> - Join a fellow biker as you commute! </p>
                <Link
                  to=""
                  onClick={() => this.props.openModal("signup")}
                  id="splash-top-link"
                >
                  Sign Up Now!
                </Link>
              </div>
              <img
                src={splashMid1}
                className="splash-mid-logo1"
                alt="splash mid1"
              />
            </div>
            <div id="splash-middle-2">
              <img
                src={splashMid2}
                className="splash-mid-logo2"
                alt="splash mid2"
              />
              <div>
                <h2>Find Bike Events Near You!</h2>
                <p>
                  Join a friend, join a family member, or even join a random
                  person and get to know each other through biking together.
                </p>
                <p></p>
              </div>
            </div>
          </section>

          <section className="splash-bottom-content">
            <div id="splash-footer-container">
              <div id="splash-footer-links">
                <a href="">About Us</a>
                <a href="">Developers</a>
                <a href="">Technology</a>
                <a href="">Hot Sauce</a>
              </div>
              <h2>GroupRide</h2>
              <p>© Copyright 2020. All rights reserved.</p>
            </div>
          </section>
        </section>
      </div>
    );}

}

export default connect(mSTP, mDTP)(Splash);