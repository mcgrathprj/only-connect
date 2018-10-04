import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class InteractionOptions extends React.Component {
//if i am the organizer, then i will see icon for edit and icon for delete. 
// if i am an attendee, i see a button for "leave event" 
// if i am not an attendee . . .  
// . . . and the # of attendees is fewer then the capacity then i see a button for "join event"    
// . . . . the # of attendees is equal or greater than the capacity, then i see "FULL"
  
    }