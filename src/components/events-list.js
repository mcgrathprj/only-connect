import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {EventLine} from './event-line';


export class EventsList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
      const events = this.props.events.map((event, index) => 
        <li key="index">
          <EventLine event = {event} />
        </li>

      return (
        <ul>
          {events}
        </ul>
      )

    }
}