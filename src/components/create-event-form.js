import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class CreateEventForm extends React.Component {
    onSubmit(values) {
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
                    validate={[required, nonEmpty]}
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
                <DatePicker
                    selected={this.props.startDate}
                    onChange={this.handleChange}
                />

                <label htmlFor="start_time">Start Time</label>
                <DatePicker
                    selected={this.state.start_time}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="LT"
                    timeCaption="Time"
                />

                <label htmlFor="end_time">End Time</label>
                <DatePicker
                    selected={this.state.end_time}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="LT"
                    timeCaption="Time"
                />

                <label htmlFor="capacity">Number of Volunteers Needed</label>
                <Field
                    component={Input}
                    type="number"
                    name="capacity"
                    id="capacity"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Create Event
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        startDate: state.events.startDate,
        endDate: state.events.endDate
    };
};

export default reduxForm({
    form: 'create-event',
    onSubmitFail: (errors, dispatch) => dispatch(focus('title', 'location', 'date', 'start_time', 'end_time', 'capacity'))
})(CreateEventForm);


