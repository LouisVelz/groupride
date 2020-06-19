import React from 'react'
import './user.css'
import RideIndexItem from './../rides/rides_index_item'
import { use } from 'passport';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rides: [] };
  }

  componentWillMount() {
    this.props.fetchUserRides(this.props.currentUser._id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ rides: newState.rides });
  }
  // componentDidMount(){
  //   this.props.fetchUserRides(this.props.currentUser._id)
  // }

  render(){
    const { rides, currentUser } = this.props
    let userRides


      userRides = rides.map( (ride, index) =>{
        // this.setState({ user_miles: user_miles + ride.total_miles})
        return <RideIndexItem key={index} ride={ride}/>
      })

    const titles = rides.map( ride => {
      return ride.title;
    }) 

    console.log(rides)
    return(
      <div className= 'user-main'>
        <div className='user-info'>
          <ul>
            <li className="user-initial">{currentUser.username[0]}</li>
            <li className="user-full-name">{currentUser.username}</li>
            <div className="user-info">
              <li className="user-email">{currentUser.email}</li>
              <li className="user-rides">rides {titles.length}</li>
            </div>
            {/* <li>{this.state.user_miles}</li> */}
            {/* <li>{currentUser.user_miles}</li>
            <li>{currentUser.bicycle}</li>
            <li>{currentUser.skill}</li>
            <li>{currentUser.fb_link}</li>
            <li>{currentUser.rides_completed}</li> */}
          </ul>
        </div>
        <div className="user-rides">
          <ul>
            {userRides}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserPage;