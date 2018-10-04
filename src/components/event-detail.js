import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import InteractionOptions fron './interaction-options';

export class EventDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="event-detail">
              <h3>{props.title}</h3>
              <p>{props.organizer}</p>
              <p>{props.location}</p>
              <p>{props.date}</p>
              <p>Starts: {props.start-time}</p>
              <p>Ends: {props.end-time}</p>
              <p>Volunteers Needed: {props.capacity}</p>
              <p>Attendees</p>
              <ul>
                {props.attendees}
              <ul>
              {InteractionOptions}
            </div>
        );
    }
}