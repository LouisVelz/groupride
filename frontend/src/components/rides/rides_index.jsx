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

    ridesItem() {

        if (Array.isArray(this.props.rides[0])){
        return (
            <ul>
                {
                    this.props.rides[0].map(ride =>
                        <RidesIndexItem key={ride._id} ride={ride} />
                    )
                }
            </ul>
        )}
    }


    render() {
        if (!this.props.rides[0]) return null;
        return (
          <div>
              {this.ridesItem()}
          </div>
        )
    }
}

export default RidesIndex;