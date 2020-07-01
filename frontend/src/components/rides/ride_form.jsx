import React from 'react';
import { withRouter } from 'react-router';
import './ride-form.scss'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import ReactDependentScript from 'react-dependent-script';

class RideForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.ride;
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
        this.props.createRide(this.state)
          .then(() => this.props.history.push("/index"))
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
      
        return (
          <div id="form-bg">
            <ReactDependentScript>
              scripts={["https://maps.googleapis.com/maps/api/js?key=AIzaSyCsS0j6913rWPp3A7tZFPwtsAP3Fz7H3sk&libraries=places"]}
            </ReactDependentScript>
            
            <div className="create-ride-form">
              <form className="c-ride-form" onSubmit={this.handleSumit}>
                <h1>{this.props.formType}</h1>
                <label>
                  Title:
                  <input
                    className="first-input"
                    type="text"
                    value={this.state.title}
                    placeholder="Enter More Than One Character"
                    onChange={this.update("title")}
                  />
                </label>
                <br />
                <label>
                  Ride Description:
                  <input
                    className="second-input"
                    type="text"
                    value={this.state.description}
                    placeholder="Enter More Than One Character"
                    onChange={this.update("description")}
                  />
                </label>
                <br />
                <label className="fourth-input">
                  Start Point:
                  <PlacesAutocomplete
                    value={this.state.meetup_location}
                    onChange={this.handleChangeMeetupLoc}
                    onSelect={this.handleSelectMeetupLoc}
 
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: "Enter Your Destination",
                          })}
                        />
                        <div className="form-suggestions">
                          {loading ? <div>...loading</div> : null}
                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#dadada"
                                : "#fff",
                            };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </label>
                <br />
                <label className="third-input">
                  End Point:
                  <PlacesAutocomplete
                    value={this.state.destination}
                    onChange={this.handleChangeDest}
                    onSelect={this.handleSelectDest}
               
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: "Enter Your Destination",
                          })}
                        />
                        <div className="form-suggestions">
                          {loading ? <div>...loading</div> : null}
                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#f3f3f3"
                                : "#fff",
                            };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </label>
                <br />
                <label className="fifth-input">
                  Ride Date:
                  <input
                    type="datetime-local"
                    value={this.state.meetup_time}
                    onChange={this.update("meetup_time")}
                  />
                </label>
                <br />
                <label className="sixth-input">
                  Purpose:
                  <select
                    value={this.state.purpose}
                    onChange={this.update("purpose")}
                  >
                    <option value="Competitive Training">
                      Competitive Training
                    </option>
                    <option value="Light Training">Light Training</option>
                    <option value="Commute">Commute</option>
                    <option value="Joy Ride">Joy Ride</option>
                  </select>
                </label>
                <br />
                <button type="submit">{this.props.formType}</button>
                <div className="push"></div>
              </form>
            </div>
          </div>
        );
    }
}

export default withRouter(RideForm);

        