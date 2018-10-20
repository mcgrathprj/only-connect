import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
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
                <span id="home-logo"><i className="fas fa-clipboard-list"></i></span>
                <span id="nav-options"><a>Create an Event</a>|<a>Browse Events</a>|<a>My Events</a></span>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
