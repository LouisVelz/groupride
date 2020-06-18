import React from 'react'
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";
const MapLoader = withScriptjs(Map)

class RideShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }

    render(){
    const { ride } = this.props
    const { duration, distance } = this.props
    debugger
    if(!ride){
      return <div>fetching data...</div>
    }else{
      return (
        <div className="show-song-main">
          <h1>{ride.title}</h1>
          <ul>
            <li>{duration}</li>
          </ul>
          <MapLoader
            ride={ride}
            ride={ride}
            // API KEY  GOES IN THIS LINK without curly braces
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    }
  }
}

export default RideShow;