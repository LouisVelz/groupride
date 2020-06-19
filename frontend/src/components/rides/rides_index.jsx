import React from 'react';
import { Link } from "react-router-dom"
import RidesIndexItem from './rides_index_item';
import { updateRide } from '../../actions/ride_actions';
import '../../stylesheets/rides/rider_index.scss'

class RidesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={rides: []}
  }

  // componentWillMount(){
  //   this.props.fetchRides();
  // }
  // componentWillReceiveProps(newState){
  //   this.setState({rides: newState.rides})
  // }
  componentDidMount() {
    this.props.fetchRides();
  }

  RenderRideItems() {
    if (Array.isArray(this.props.rides[0])) {
      return (
        <ul>
          {this.props.rides[0].map((ride) => (
            <RidesIndexItem
              key={ride._id}
              currentUser={this.props.currentUser}
              updateRide={this.props.updateRide}
              trashRide={this.props.trashRide}
              leaveRide={this.props.leaveRide}
              ride={ride}
            />
          ))}
        </ul>
      );
    }
  }

  render() {
    if (!this.props.rides[0]) return null;
    return (
      <div className="ride-index-container">
        <section className="index-feed-container">
          <h1 className="index-head"> Ride Event Feed</h1>
          {this.RenderRideItems()}
        </section>
      </div>
    );
  }
}

export default RidesIndex;