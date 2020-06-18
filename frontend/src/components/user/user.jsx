import React from 'react'
import './user.scss'
import RideIndexItem from './../rides/rides_index_item'

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
    debugger
    const { rides, currentUser } = this.props
    let userRides


      userRides = rides.map( (ride, index) =>{
        this.setState({ user_miles: user_miles + ride.total_miles})
        return <RideIndexItem key={index} ride={ride}/>
      })

    return(
      <div className= 'user-main'>
        <div className='user-info'>
          <ul>
            {/* <li><img src="" alt=""/></li> */}
            <li>{currentUser.username}</li>
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