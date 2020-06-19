import React from 'react'
import Map from "../map/map_show_page"
import { withScriptjs } from "react-google-maps";
import './ride_show.scss'


const MapLoader = withScriptjs(Map)

class RideShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { ride: null };
  }

  componentWillMount() {
    this.props.fetchRide(this.props.match.params.rideId);
    this.props.fetchParticipants(this.props.match.params.rideId)

  }

  componentWillReceiveProps(newState) {
    this.setState({ ride: newState.ride });
  }
  
  // componentDidMount() {
  //   this.props.fetchRide(this.props.match.params.rideId);
    
  // }

  render() {
    const { ride, participants } = this.props;
    let joinedMembers;
    

    if (!ride || !participants) {
      return <div>fetching data...</div>;
    } else {
          var setMeetTime = ride.meetup_time;
          var meetDate = setMeetTime.split("T")[0];
          var meetTime = setMeetTime.substring(
            setMeetTime.lastIndexOf("T") + 1,
            setMeetTime.lastIndexOf(".")
          );
          joinedMembers = participants.map((participant, index) => {
              return <li key={index}>{participant.username}</li>
            })
      return (
        <div className="show-ride-main">
          <h1>{ride.title}</h1>
          <div className="show-ride-list">
            <div className="show-ride-list-ul">
              <ul>
                <li>Event Posted: {ride.date.split("T")[0]}</li>
                <li>RIDE DESCRIPTION: {ride.description}</li>
                <li>
                  START: <span>{ride.meetup_location}</span>
                </li>
                <li>
                  FINISH: <span>{ride.destination}</span>
                </li>
                <li>MEET DATE: {meetDate}</li>
                <li>MEET TIME: {meetTime}</li>
              </ul>
              <ul>PARTICIPANTS: {joinedMembers}</ul>
            </div>

            <div className="show-ride-map">
              <MapLoader
                ride={ride}
                // API KEY  GOES IN THIS LINK without curly braces
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
          <p>-Green lines on map show bicycle roads 🚴🏿‍♀️-</p>
        </div>
      );
    }
  }
}

export default RideShow;