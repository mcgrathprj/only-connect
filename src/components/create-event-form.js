import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

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
                <label htmlFor="event-location">Location</label>
                <Field
                    component={Input}
                    type="text"
                    name="location"
                    id="location"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="time">Date</label>
                <Field
                    component={Input}
                    type="date"
                    name="date"
                    id="date"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="start-time">Start Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="start-time"
                    id="start-time"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="end-time">End Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="end-time"
                    id="end-time"
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
                <button disabled={this.props.pristine || this.props.submitting}>
                    Create Event
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'create-event',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(CreateEventForm);
