import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchAllEvents} from '../actions/events';
import EventLine from './event-line';


class EventsList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllEvents());
    }

    render() {
      const events = this.props.events.map((event, index) => 
        <li key="index">
          <EventLine event = {event} />
        </li>
      )

      return (
        <ul>
          {events}
        </ul>
      )

    }
}

const mapStateToProps = state => ({
  events: state.events.events
})

export default connect(mapStateToProps)(EventsList)
