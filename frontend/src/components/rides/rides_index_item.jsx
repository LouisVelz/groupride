import React from 'react'
import { Link } from 'react-router-dom';
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Map);

class RideIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.currentUser,
      id: this.props.ride._id,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateRide(this.state);
  }

  joinRide() {
    if (!this.props.currentUser) return null;

    if (this.props.currentUser._id !== this.props.ride.creator) {
      return <button onClick={this.handleClick}>Join Ride</button>;
    }
  }

  render() {
    // debugger;
    console.log("api key", process.env.REACT_APP_DIRECTIONS_API);
    const { ride } = this.props;
    var setMeetTime = ride.meetup_time;
    // debugger;
    const meetDate = setMeetTime.split("T")[0];
    const meetTime = setMeetTime.substring(
      setMeetTime.lastIndexOf("T") + 1,
      setMeetTime.lastIndexOf("Z")
    );
    return (
      <div className="event-container">
        <div className="event-title">
          <h1>{ride.title}</h1>
          {this.joinRide()}
          <h2>Event Posted: {ride.date.split("T")[0]}</h2>
        </div>
        <h2>{ride.destination}</h2>
        <div className="event-desc">
          <div>
            When: <p>{ride.meetDate}</p>
          </div>
          <div>
            Time: <p>{ride.meetTime}</p>
          </div>
          <div>
            Location: <p>{ride.meetup_location}</p>
          </div>
          <div>
            Riders: <p>{ride.participants.length}</p>
          </div>
        </div>
        <div>
          <MapLoader
            ride={ride}
            // API KEY  GOES IN THIS LINK without curly braces
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key={url}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default RideIndexItem;