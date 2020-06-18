import React from 'react'
import Map from "../map/map"
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
  }

  componentWillReceiveProps(newState) {
    this.setState({ ride: newState.ride });
  }

  // componentDidMount() {
  //   this.props.fetchRide(this.props.match.params.rideId);
  // }

  render() {
    const { ride } = this.props;
    let joinedMembers;

    // joinedMembers = ride.participants.map(participant => {
    //   return <li>{participant}</li>
    // })
    debugger;
    if (!ride) {
      return <div>fetching data...</div>;
    } else {
      return (
        <div className="show-ride-main">
          <h1>{ride.title}</h1>
          <ul>
            <li>{ride.date}</li>
            <li>{ride.description}</li>
            <li>{ride.destination}</li>
            <li>{ride.meetup_location}</li>
            <li>{ride.meetup_time}</li>
          </ul>
          <MapLoader
            ride={ride}
            // API KEY  GOES IN THIS LINK without curly braces
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
          />
          <ul>{joinedMembers}</ul>
        </div>
      );
    }
  }
}

export default RideShow;