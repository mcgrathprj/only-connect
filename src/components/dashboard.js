import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchAllEvents} from '../actions/events';
import MyEvents from './my-events';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllEvents());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-name"><h2>Welcome {this.props.name}!</h2></div>
                <div className="dashboard-protected-data">
                   <h2>My Events</h2> 
                   <MyEvents/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
