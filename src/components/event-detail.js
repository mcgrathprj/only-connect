import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import InteractionOptions from './interaction-options';
import {loadCurrentEvent} from '../actions/events'

class EventDetail extends React.Component {

    render() {
        return (
            <div className="event-detail">
              <h3>{this.props.event.title}</h3>
              <p>{this.props.event.organizer}</p>
              <p>{this.props.event.location}</p>
              <p>{this.props.event.date}</p>
              <p>Starts: {this.props.event.start_time}</p>
              <p>Ends: {this.props.event.end_time}</p>
              <p>Volunteers Needed: {this.props.event.capacity}</p>
              <p>Attendees</p>
              <ul>
                {this.props.event.attendees}
              </ul>
              <InteractionOptions />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  event: state.events.currentEvent
})

export default connect(mapStateToProps)(EventDetail)
