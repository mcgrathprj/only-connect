import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchMyEvents} from '../actions/events';

class MyEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMyEvents());
    }

    render() {
      const myEvents = this.props.events.map((event, index) => 
        <li key={index}>{event.title}</li>
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
