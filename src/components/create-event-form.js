import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {changeDate, createEvent} from '../actions/events';
import {connect} from 'react-redux';

export class CreateEventForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(createEvent(values))
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="create-event-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="title">Title of Event</label>
                <Field
                    component={Input}
                    type="text"
                    name="title"
                    id="title"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="description">Description</label>
                <Field
                    component={Input}
                    type="text"
                    name="description"
                    id="description"
                />                
                <label htmlFor="location">Location</label>
                <Field
                    component={Input}
                    type="text"
                    name="location"
                    id="location"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="date">Date</label>
                <Field
                    component={Input}
                    type="date"
                    name="date"
                    id="date"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="start_time">Start Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="start_time"
                    id="start_time"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="end_time">End Time</label>
                <Field                    
                    component={Input}
                    type="time"
                    name="end_time"
                    id="end_time"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="capacity">Number of Volunteers Needed</label>
                <Field
                    component={Input}
                    type="number"
                    name="capacity"
                    id="capacity"
                    validate={[required, nonEmpty]}
                />
                <button 
                    type="submit" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Create Event
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        startDate: state.events.startDate,
        startTime: state.events.startTime,
        endTime: state.events.endTime
    };
};

export default reduxForm({
    form: 'create-event',
    onSubmitFail: (errors, dispatch) => dispatch(focus('title', 'location', 'date', 'start_time', 'end_time', 'capacity'))
})(connect(mapStateToProps)(CreateEventForm));
