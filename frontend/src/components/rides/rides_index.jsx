import React from 'react';
import { Link } from "react-router-dom"
import RidesIndexItem from './rides_index_item';

class RidesIndex extends React.Component {
    constructor(props) {
        super(props);

    }

   
    componentDidMount() {
        this.props.fetchRides();
    }

    RenderRideItems() {
        debugger
        if (Array.isArray(this.props.rides[0])){
        return (
            <>
                { this.props.rides[0].map(ride => <RidesIndexItem key={ride._id} ride={ride} />) }
            </>
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