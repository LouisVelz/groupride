import React from 'react'

class RideShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }

    render(){
    const { ride } = this.props

    if(!ride){
      return <div>fetching data...</div>
    }else{
      return(
        <div className="show-song-main">
          
        </div>
      )
    }
  }
}