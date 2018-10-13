import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_ALL_EVENTS_SUCCESS,
    FETCH_MY_EVENTS_SUCCESS,
    FETCH_ALL_EVENTS_ERROR,
    FETCH_MY_EVENTS_ERROR
} from '../actions/events';

const initialState = {
    data: '',
    error: null,
    currentEvent: null,
    events: [
        {
            organizer: "peterm",
            title: "Canvas in York, PA",
            description: "We are going to be going door-to-door in lovely York, PA, canvasing likely Democratic voters, to find out whether they are going to vote, to encourage them to vote for our candidates, and to provide them with polling information. It should be a great day -- good weather, good chance to get out and help Get out the Vote.",
            location: " William C. Goodridge Freedom Center and Underground Railroad Museum, https://goo.gl/maps/4QC6BioPVp42",
            date: "10/06/2018",
            start_time: "10:00",
            end_time: "15:00",
            capacity: 50,
            attendees: ["peterm", "claudiak", "daisyg", "marlene", "andeeee", "toddirl"] 
        },
        {
            organizer: "claudiak",
            title: "Phone Bank in Silver Spring, MD",
            description: "Bring your cellphone and charger! We need to call likely voters in West Virginia, Texas, Wisconsin, Georgia and Florida to encourage them to GET OUT THE VOTE",
            location: "Silver Spring Presbyterian Church, 580 University Blvd East",
            date: "10/09/2018",
            start_time: "18:00",
            end_time: "20:00",
            capacity: 12,
            attendees: ["claudiak", "daisyg", "marlene", "andeeee", "toddirl", "peterm"] 
        },
        {
            organizer: "claudiak",
            title: "Phone Bank in Washington, DC",
            description: "Bring your cellphone and charger! We need to call likely voters in key districts to encourage them to GET OUT THE VOTE",
            location: "All Souls Church, 1500 Harvard Street NW",
            date: "10/10/2018",
            start_time: "18:00",
            end_time: "20:00",
            capacity: 8,
            attendees: ["claudiak", "daisyg", "marlene", "andeeee", "toddirl"] 
        }
    ]
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ALL_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_ALL_EVENTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_MY_EVENTS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_MY_EVENTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }


    return state;
}
