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
    return fetch(`${API_BASE_URL}/api/events`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchAllEventsSuccess(data)))
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
    return fetch(`${API_BASE_URL}/api/events/${currentUser}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchMyEventsSuccess(data)))
        .catch(err => {
            dispatch(fetchMyEventsError(err));
        });
};
