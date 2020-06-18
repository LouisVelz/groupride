import React from 'react';
import { Link } from "react-router-dom"
import RidesIndexItem from './rides_index_item';
import { updateRide } from '../../actions/ride_actions';

class RidesIndex extends React.Component {
    constructor(props) {
        super(props);

    }

   
    componentDidMount() {
        this.props.fetchRides();
    }

<<<<<<< HEAD
    RenderRideItems() {
        // debugger
        if (Array.isArray(this.props.rides[0])){
        return (
            <>
                { this.props.rides[0].map(ride => 
                <RidesIndexItem 
                    key={ride._id} 
                    currentUser={this.props.currentUser} 
                    updateRide={this.props.updateRide} 
                    ride={ride} 
                />) }
            </>
=======
    ridesItem() {
        if (Array.isArray(this.props.rides[0])){
        return (
            <ul>
                {
                    this.props.rides[0].map(ride =>
                        <RidesIndexItem key={ride._id} currentUser={this.props.currentUser} updateRide={this.props.updateRide} ride={ride} />
                    )
                }
            </ul>
>>>>>>> f21deb3f8876a55c5064579fffb7c2396d2cb7ec
        )}
    }


    render() {
        if (!this.props.rides[0]) return null;
        return (
          <div className="index-page-container">
            <section className="index-feed-container">{this.RenderRideItems()}</section>
          </div>
        );
    }
}

export default RidesIndex;