/*global google*/
import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, lifecycle } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,

} from "react-google-maps";

class MapWithADirectionsRenderer extends React.Component{
    constructor(props){
        super(props);
        // API KEY  GOES IN THIS LINK without curly braces
        this.googleMapURL =
          "https://maps.googleapis.com/maps/api/js?key={API_Key}&v=3.exp&libraries=geometry,drawing,places";
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

        return(
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: "500px" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <li>{this.state.directions.routes[0].legs[0].distance.text}</li>
                <li>{this.state.directions.routes[0].legs[0].duration.text}</li>
            </div>
        )
    }


}

export default MapWithADirectionsRenderer;