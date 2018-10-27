import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import CreateEventForm from './create-event-form';
import EventsList from './events-list';
import MyEvents from './my-events';
import {Link} from 'react-router-dom';

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button id= "logout" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <span id="home-logo"><i className="fas fa-clipboard-list" onClick={() => this.GoHome()}></i></span>
                <span id="nav-options">
                    <Link to="/create">Create an Event</Link>|
                    <Link to="/browse">Browse Events</Link>|
                    <Link to="/myevents">My Events</Link>
                </span>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
