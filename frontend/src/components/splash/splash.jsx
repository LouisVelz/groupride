import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mstp = (state) => {

}

const mdtp = dispatch => {

}


class Splash extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
    <section className="splash-container">
      <section className="splash-top-content">
        <image></image>
        <div className="splash-top-context"> 
            <h1>
              Welcome to GroupRider.
            </h1>
            <h2>
              A new way to socially interact with others. Where your solo rides can become group marathons!
            </h2>
        </div>
        <div className="splash-top-links">
          <Link to="/signup" id="splash-top-link">Join the Community →</Link>
        </div>
      </section>


      <section className="splash-middle-content">
        <div id="splash-middle-1">
          <h2>Don't Bike Alone!</h2>
          <p>Riding alone can be dangerous, especially in cities with large traffics. Join a fellow biker as you commute!</p>
          <img></img>
        </div>
        <div id="splash-middle-2">
          <img></img>
          <h2>Find Bike Events Near You!</h2>
          <p>Join a friend, join a family member, or even join a random person and get to know each other through biking together.</p>
        </div>
      </section>

      <section className="splash-bottom-content">


      </section>

    </section>

  
    )}

}

export default connect(null, null)(Splash);