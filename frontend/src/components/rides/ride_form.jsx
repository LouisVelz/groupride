import React from 'react';
import { withRouter } from 'react-router';

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
        this.props.createRide(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSumit}>
                <h1>{this.props.formType}</h1>
                <label>title
                    <input type="text" value={this.state.understanding}
                        onChange={this.update('title')} />
                </label>
                <label>description
                    <input type="text" value={this.state.understanding}
                        onChange={this.update('description')} />
                </label>
                <label>destination
                    <input type="text" value={this.state.understanding}
                        onChange={this.update('destination')} />
                </label>
                <label>meetup location
                    <input type="text" value={this.state.understanding}
                        onChange={this.update('meetup_location')} />
                </label>
                <label>meetup time
                    <input type="text" value={this.state.understanding}
                        onChange={this.update('meetup_time')} />
                </label>
                <label>purpose
                    <textarea value={this.state.improvement}
                        onChange={this.update('purpose')} />
                </label>
                <input type='submit' value={this.props.formType} />
            </form>
        );
    }
}

export default withRouter(RideForm);
