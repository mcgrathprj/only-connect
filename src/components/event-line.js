import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {InteractionOptions} from './interaction-options'

class EventLine extends React.Component {
    render() {
        return (
            <span>{this.props.event.date}: {this.props.event.title}
              <InteractionOptions event="this.event" />
            </span>
        );
    }
}

const mapStateToProps = state => ({
  event: state.events.currentEvent
})

export default connect(mapStateToProps)(EventLine)