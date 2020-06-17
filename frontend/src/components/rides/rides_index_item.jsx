import React from 'react'
import { Link } from 'react-router-dom';
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Map);

class RideIndexItem extends React.Component {



  render() {
    console.log("api key", process.env.REACT_APP_DIRECTIONS_API)
    const { ride } = this.props
    return (
      <li className="hot-item">
        <p>{ride.destination}</p>

        <MapLoader
          ride={ride}
          // API KEY  GOES IN THIS LINK without curly braces
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </li>
    );
  }


}

export default RideIndexItem;