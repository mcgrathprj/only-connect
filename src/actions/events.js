import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

