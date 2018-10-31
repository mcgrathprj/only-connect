import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchMyEvents} from '../actions/events';
import {Link} from 'react-router-dom';

import './my-events.css';

class MyEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMyEvents());
    }

    render() {
      const myEvents = this.props.events.map((event, index) => 
        <li key={index}><Link to="/eventdetail">{event.title}</Link></li>
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

export default connect(mapStateToProps)(MyEvents)
