import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {InteractionOptions} from './interaction-options'

export default function EventLine(props) {
      return (
          <span>{props.event.date}: {props.event.title}
            <InteractionOptions event="this.event" />
          </span>
      );
}

// const mapStateToProps = state => ({
//   event: state.events.currentEvent
// })
