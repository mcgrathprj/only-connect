import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchMyEvents} from '../actions/events';
import {Link} from 'react-router-dom';
import {loadCurrentEvent} from '../actions/events';
import {withRouter} from 'react-router-dom';
import {InteractionOptions} from './interaction-options';

import './my-events.css';

class MyEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMyEvents());
    }

    loadCurrentEvent(currentEvent) {
      this.props.dispatch(loadCurrentEvent(currentEvent));
      this.props.history.push("/eventdetail")
    }

    render() {
      const myEvents = this.props.events.map((currentEvent, index) => 
        <li key={index} onClick={() => this.loadCurrentEvent(currentEvent)} className="event-line">{currentEvent.date}: {currentEvent.title} <InteractionOptions event="this.event" /></li>
      )

      return (
        <ul>
          {myEvents}
        </ul>
      )

    }
}

const mapStateToProps = state => ({
  events: state.events.events
})

export default withRouter(connect(mapStateToProps)(MyEvents))
