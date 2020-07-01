import React from 'react'
import { Link } from 'react-router-dom';
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";
import "../../stylesheets/rides/rider_index_item.scss"
import ThreeDots from '../content-loader/contend-loader';

const googleMap = require("../../config/keys").REACT_APP_GOOGLE_KEY;

const MapLoader = withScriptjs(Map);

class RideIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      participants: this.props.currentUser,
      id: this.props.ride._id
        }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUnjoin = this.handleUnjoin.bind(this)
  }

handleClick(){
  this.props.updateRide(this.state)
    .then(() => window.location.reload())
}
handleDelete(){
  this.props.trashRide(this.state.id)
    .then(() => window.location.reload())
}
  handleUnjoin() {
    this.props.leaveRide(this.state)
      .then(() => window.location.reload())
  }
  trashRide() {
    if (!this.props.currentUser) return null;

    if (this.props.currentUser._id === this.props.ride.creator) {
      
        return (
          <button className="event-delete" onClick={this.handleDelete}>Delete Ride</button>
        )
    }
  }
joinRide(){
  if(!this.props.currentUser) return null;
  
  if(this.props.currentUser._id!==this.props.ride.creator){
    if (!this.props.ride.participants.includes(this.props.currentUser._id)) {
      return(
        <button className="event-join" onClick={this.handleClick}>Join Ride</button>
        )
    } else {
      return (
        <button className="event-leave" onClick={this.handleUnjoin}>Leave Ride</button>
      )
    }
  }
}
  render() {
    const { ride } = this.props;

    if(!ride){
      return (
        <div className="event-container">
          <ThreeDots/>
        </div>
      )
    } else {

    var setMeetTime = ride.meetup_time;
    var meetDate = setMeetTime.split("T")[0];
    var meetTime = setMeetTime.substring(
      setMeetTime.lastIndexOf("T") + 1,
      setMeetTime.lastIndexOf(".")
    );
    
    return (
      <div className="event-container">
        <div id="event-div-container">
          <div className="event-title">
            <h1>{ride.title}</h1>
            <h2>Event Posted: {ride.date.split("T")[0]}</h2>
          </div>
          <div className="event-location">
            <div id="event-location-div1">
              START: <p>{ride.meetup_location}</p>
            </div>
            <div id="event-location-div2">
              FINISH: <p>{ride.destination}</p>
            </div>
          </div>
          <div className="event-desc">
            <div id="event-desc-div1">
              <p>MEET DATE</p> <p>{meetDate}</p>
            </div>
            <div id="event-desc-div2">
              MEET TIME <p>{meetTime}</p>
            </div>
            <div id="event-desc-div3">
              RIDERS JOINED <p>{ride.participants.length}</p>
            </div>
          </div>

          <button id="show-page-btn">
            <Link to={`/ride/${ride._id}`}>Show Details</Link>
          </button>
          <div id="btn-for-ride">
            {this.joinRide()}
            {this.trashRide()}
          </div>
        </div>
        <MapLoader
          ride={ride}
          // API KEY  GOES IN THIS LINK without curly braces
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" +
            googleMap
          }
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
        }
  }
}

export default RideIndexItem;