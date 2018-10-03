import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

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
                <label htmlFor="event-title">Title of Event</label>
                <Field
                    component={Input}
                    type="text"
                    name="event-title"
                    id="event-title"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="event-description">Description</label>
                <Field
                    component={Input}
                    type="text"
                    name="event-description"
                    id="event-description"
                    validate={[required, nonEmpty]}
                />                
                <label htmlFor="event-location">Location</label>
                <Field
                    component={Input}
                    type="text"
                    name="event-location"
                    id="event-location"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="event-time">Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="event-time"
                    id="event-time"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="event-start-time">Start Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="event-start-time"
                    id="event-start-time"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="event-end-time">End Time</label>
                <Field
                    component={Input}
                    type="time"
                    name="event-end-time"
                    id="event-end-time"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="event-volunteers-needed">Number of Volunteers Needed</label>
                <Field
                    component={Input}
                    type="time"
                    name="event-volunteers-needed"
                    id="event-volunteers-needed"
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
