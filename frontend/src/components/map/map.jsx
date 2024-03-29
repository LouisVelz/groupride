/*global google*/
import React from "react";
// import ReactDOM from "react-dom";
// import { compose, withProps, lifecycle } from "recompose";
import {
    // withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,

} from "react-google-maps";

class MapWithADirectionsRenderer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            directions: null,


        };
    }

    componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();
        
        DirectionsService.route(
            {
                origin: this.props.ride.meetup_location,
                destination: this.props.ride.destination,
                travelMode: 'BICYCLING'
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    render(){
        if(!this.state.directions){
            return null;
        }
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 6.5244, lng: 3.3792 }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));
        return (
          <div className="event-map">
            <GoogleMapExample
              containerElement={
                <div
                  id="map-container"
                  style={{ height: `300px`, width: "500px" }}
                />
              }
              mapElement={
                <div id="map-height-ele" style={{ height: `100%` }} />
              }
            />
            <li className="map-miles">
              Distance: {this.state.directions.routes[0].legs[0].distance.text}
            </li>
            <li className="map-hours">
              Duration: {this.state.directions.routes[0].legs[0].duration.text}
            </li>
          </div>
        );
    }


}

export default MapWithADirectionsRenderer;