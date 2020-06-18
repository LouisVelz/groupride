import React from 'react'
import { Link } from 'react-router-dom';
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Map);

class RideIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      participants: this.props.currentUser,
      id: this.props.ride._id
        }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(){
  this.props.updateRide(this.state)
}
joinRide(){
  if(!this.props.currentUser) return null;
  
  if(this.props.currentUser._id!==this.props.ride.creator){
    return(
      <button onClick={this.handleClick}>Join Ride</button>
    )
  }
}
  render() {
    console.log("api key", process.env.REACT_APP_DIRECTIONS_API)
    return (

      <li className="hot-item">
        <p>{this.props.ride.destination}</p>
        {this.joinRide()}
        <MapLoader ride={this.props.ride}
                // API KEY  GOES IN THIS LINK without curly braces
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCsS0j6913rWPp3A7tZFPwtsAP3Fz7H3sk&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </li>

    )
  }


}

export default RideIndexItem;