import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const FETCH_ALL_EVENTS_SUCCESS = 'FETCH_ALL_EVENTS_SUCCESS';
export const fetchAllEventsSuccess = data => ({
    type: FETCH_ALL_EVENTS_SUCCESS,
    data
});

export const FETCH_ALL_EVENTS_ERROR = 'FETCH_ALL_EVENTS_ERROR';
export const fetchAllEventsError = error => ({
    type: FETCH_ALL_EVENTS_ERROR,
    error
});

export const fetchAllEvents = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/events`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(fetchAllEventsSuccess(res)))
    .catch(err => {
        dispatch(fetchAllEventsError(err));
    });
};

export const FETCH_MY_EVENTS_SUCCESS = 'FETCH_MY_EVENTS_SUCCESS';
export const fetchMyEventsSuccess = data => ({
    type: FETCH_MY_EVENTS_SUCCESS,
    data
});

export const LOAD_CURRENT_EVENT = 'LOAD_CURRENT_EVENT';
export const loadCurrentEvent = data => ({
    type: LOAD_CURRENT_EVENT,
    data
});


export const FETCH_MY_EVENTS_ERROR = 'FETCH_MY_EVENTS_ERROR';
export const fetchMyEventsError = error => ({
    type: FETCH_MY_EVENTS_ERROR,
    error
});

export const fetchMyEvents = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const currentUser = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/events/${currentUser}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchMyEventsSuccess(data)))
    .catch(err => {
        dispatch(fetchMyEventsError(err));
    });
};

export const CHANGE_DATE = 'CHANGE_DATE';
export const changeDate = date => ({
    type: CHANGE_DATE,
    date
});

export const createEvent = event => (dispatch, getState) => {
    console.log("create event dispatched");
    event.organizer = getState().auth.currentUser.username;
    console.log("create event dispatched after line 72");
    return fetch(`${API_BASE_URL}/events`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
