import React from 'react';
import { withRouter } from 'react-router';
import './ride-form.scss'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

class RideForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.ride;
        // const [address, setAddress] = React.useState("");
        // this.address = address;
        // this.setAddress = setAddress;
        this.handleSumit = this.handleSumit.bind(this);
    }

    

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSumit() {
        this.props.createRide(this.state);
    }

  handleChangeDest = destination => {
    this.setState({ destination });
  };

  handleChangeMeetupLoc = meetup_location => {
    this.setState({ meetup_location });
  };
  
  handleSelectDest = destination => {
    
    this.setState({ destination });
    geocodeByAddress(destination)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleSelectMeetupLoc = meetup_location => {
    this.setState({ meetup_location });
    geocodeByAddress(meetup_location)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

    render() { 
      // const handleSelect = async value => {};
      
        return (
          <div className="create-ride-form">
            <form onSubmit={this.handleSumit}>
              <h1>{this.props.formType}!!!</h1>
              <label>
                Title:
                <input
                  className="first-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </label>
              <br />
              <label>
                Trip Description:
                <input
                  className="second-input"
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                />
              </label>
              <br />
              <label>
                Destination:
                <PlacesAutocomplete value={this.state.destination} onChange={this.handleChangeDest} onSelect={this.handleSelectDest}>
                  
                  {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <div>
                  <input {...getInputProps({placeholder:"enter your destination"})}
                      // type="text"
                      // className="third-input"
                      // value={this.state.destination}
                      // onChange={this.update("destination")}
                    />
                    <div>
                      {loading ? <div>...loading</div> : null}
                      {suggestions.map((suggestion)=>{
                        const style = {
                          backgroundColor: suggestion.active ? "#dadada" : "#fff"
                        };
                        return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                      })}
                    </div>
                    </div>
                    )}
                    
                </PlacesAutocomplete>
              </label>
              <br />
              <label>
                GroupRide location:
                <PlacesAutocomplete value={this.state.meetup_location} onChange={this.handleChangeMeetupLoc} onSelect={this.handleSelectMeetupLoc}>

                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input {...getInputProps({ placeholder: "enter your destination" })}
                      // type="text"
                      // className="third-input"
                      // value={this.state.destination}
                      // onChange={this.update("destination")}
                      />
                      <div>
                        {loading ? <div>...loading</div> : null}
                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active ? "#dadada" : "#fff"
                          };
                          return <div {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                        })}
                      </div>
                    </div>
                  )}

                </PlacesAutocomplete>
              </label>
              <br />
              <label>
                Groupride departure time:
                <input
                  type="datetime-local"
                  className="fifth-input"
                  value={this.state.meetup_time}
                  onChange={this.update("meetup_time")}
                />
              </label>
              <br />
              <label>
                Purpose:
                <select
                  value={this.state.purpose}
                  onChange={this.update("purpose")}
                >
                  <option value="Competitive Training">Competitive Training</option>
                  <option value="Light Training">Light Training</option>
                  <option value="Commute">Commute</option>
                  <option value="Joy Ride">Joy Ride</option>
                </select>
              </label>
              <br />
              <button type="submit">{this.props.formType}</button>
              {/* <input type="submit" value={this.props.formType} /> */}
            </form>
          </div>
        );
    }
}

export default withRouter(RideForm);

          // <select value={this.state.value} onChange={this.handleChange}>
          //   <option value="grapefruit">Grapefruit</option>
          //   <option value="lime">Lime</option>
          //   <option value="coconut">Coconut</option>
          //   <option value="mango">Mango</option>
          // </select>;
