import React from 'react'

class RideIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return <div>{this.props.ride}</div>
  }
}

export default RideIndexItem;