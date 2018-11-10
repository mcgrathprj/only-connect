import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_ALL_EVENTS_SUCCESS,
    FETCH_MY_EVENTS_SUCCESS,
    FETCH_ALL_EVENTS_ERROR,
    FETCH_MY_EVENTS_ERROR,
    CHANGE_DATE,
    LOAD_CURRENT_EVENT
} from '../actions/events';

const initialState = {
    data: '',
    events: [],
    error: null,
    currentEvent: null,
    eventStartDate: null,
    eventStartTime: null,
    eventEndTime: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ALL_EVENTS_SUCCESS) {
        console.log(action.data);
        return Object.assign({}, state, {
            events: action.data,
            error: null
        });
    } else if (action.type === FETCH_ALL_EVENTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_MY_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            events: action.data,
            error: null
        });
    } else if (action.type === FETCH_MY_EVENTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === CHANGE_DATE) {
        return Object.assign({}, state, {
            eventStartDate: action.date
        });
    } else if (action.type === LOAD_CURRENT_EVENT) {
        return Object.assign({}, state, {
            currentEvent: action.data
        });
    }


    return state;
}
