import React from 'react'
import { Link } from 'react-router-dom';
import Map from "../map/map"
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Map);

class RideIndexItem extends React.Component {



  render() {
    console.log("api key", process.env.REACT_APP_DIRECTIONS_API)
    return (

      <li className="hot-item">
        <p>{this.props.ride.destination}</p>
        
        <MapLoader ride={this.props.ride}
                // API KEY  GOES IN THIS LINK without curly braces
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key={API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </li>

    )
  }


}

export default RideIndexItem;