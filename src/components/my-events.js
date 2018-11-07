import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchMyEvents} from '../actions/events';
import {Link} from 'react-router-dom';
import {loadCurrentEvent} from '../actions/events';
import {withRouter} from 'react-router-dom';

import './my-events.css';

class MyEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMyEvents());
    }

    loadCurrentEvent(id) {
      this.props.dispatch(loadCurrentEvent(id));
      this.props.history.push("/eventdetail")
    }

    render() {
      const myEvents = this.props.events.map((event, index) => 
        <li key={index} onClick={index => this.loadCurrentEvent(index)}>{event.title}</li>
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
