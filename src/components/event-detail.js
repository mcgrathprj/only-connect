import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import InteractionOptions fron './interaction-options';

class EventDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="event-detail">
              <h3>{this.props.event.title}</h3>
              <p>{this.props.event.organizer}</p>
              <p>{this.props.event.location}</p>
              <p>{this.props.event.date}</p>
              <p>Starts: {this.props.event.start-time}</p>
              <p>Ends: {this.props.event.end-time}</p>
              <p>Volunteers Needed: {this.props.event.capacity}</p>
              <p>Attendees</p>
              <ul>
                {this.props.event.attendees}
              </ul>
              <InteractionOptions event={this.props.event} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  event: state.events.currentEvent
})

export default connect(mapStateToProps)(EventDetail)
