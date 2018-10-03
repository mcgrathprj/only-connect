import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class EventDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="event-detail">
              <h3>{props.event-title}</h3>
              <p>{props.event-organizer}</p>
              <p>{props.event-location}</p>
              <p>{props.event-date}</p>
              <p>Starts: {props.event-start-time}</p>
              <p>Ends: {props.event-end-time}</p>
              <p>Volunteers Needed: {props.event-volunteers-needed}</p>
              <p>Attendees</p>
              <ul>
                {props.event-attendees}
              <ul>
//need to write component for allowing you to sign up, edit the event, delete the event, or opt out of the event
              {InteractionOptions}
            </div>
        );
    }
}