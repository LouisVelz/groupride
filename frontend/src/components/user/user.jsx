import React from 'react'
import './user.css'
import RideIndexItem from './../rides/rides_index_item'
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
  // constructor(props) {
  //   super(props);

    // this.state = { rides: [] };
  // }

  componentWillMount() {
    this.props.fetchUserRides(this.props.currentUser._id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ rides: newState.rides });
  }

  render(){

    if (!this.props.rides) { return null }
    const { rides, currentUser, openModal } = this.props

    let userRides


    userRides = rides.map( (ride, index) =>{
      // this.setState({ user_miles: user_miles + ride.total_miles})
      return <RideIndexItem key={index} ride={ride}/>
    })

    const titles = rides.map( ride => {
      return ride.title;
    }) 

    console.log(currentUser)
    return(
      <div className= 'user-main'>
        <div className='user-info'>
            <div className="user-initial">{currentUser.username[0]}</div>
            <div className="user-full-name">{currentUser.username}</div>
              <div className="user-email">{currentUser.email}</div>
          <ul>
            <div className="user-additional-info">
              <li className="user-bike">Bicycle type: {currentUser.bike_type}</li>
              <li className="user-rides-number">Rides: {titles.length}</li>
              <li className="user-skill">Skill level: {currentUser.skill_level}</li>
            </div>
            <li className="user-link">Social Media link: <a href={currentUser.social_media}>{currentUser.social_media}</a></li>
          </ul>
          <Link
              className="edit-button"
              to={`/user/${currentUser._id}`}
              onClick={() => openModal("edit")}
            >
              Edit Profile
          </Link>
        </div>
        <div className="user-rides">
          <h1 className="rides-header">Your Rides</h1>
          <ul>
            {userRides}
          </ul>

        </div>
      </div>
    );
  }
}

export default UserPage;