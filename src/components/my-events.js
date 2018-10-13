import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

class MyEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
      const myEvents = this.props.events.map((event, index) => 
        <li key="index">
          <ul event = {event} />
        </li>
      )

      return (
        <ul>
          {myEvents}
        </ul>
      )

    }
}

const mapStateToProps = state => ({
  event: state.events.currentEvent
})

export default connect(mapStateToProps)(MyEvents)
