import React from "react";
import { Field, reduxForm, reset } from "redux-form";
// import submit from "./submitForm";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter a Name";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Enter an Email Address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Enter a message";
  } else if (values.message.length > 140) {
    errors.message = "Must be 140 characters or less";
  }

  return errors;
};

const afterSubmit = (result, dispatch) => dispatch(reset("submitTrailForm"));

const renderField = ({
  input,
  label,
  placeholder,
  type,
  disabled,
  meta: { touched, error, invalid, valid }
}) => (
  <div
    className={`form-group ${touched && invalid ? "invalid" : ""} ${
      touched && valid ? "valid" : ""
    }`}
  >
    <label>{label}</label>
    <div className="input-wrapper">
      {type === "input" && (
        <input
          {...input}
          placeholder={placeholder}
          className="field"
          disabled={disabled}
        />
      )}
      {type === "textarea" && (
        <textarea
          {...input}
          placeholder={placeholder}
          className="field"
          disabled={disabled}
        />
      )}
      {touched && error && <span className="error-msg">{error}</span>}
    </div>
  </div>
);

const TrailFrom = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="trail-form">
      <fieldset>
        <Field
          name="name"
          type="input"
          component={renderField}
          label="Name"
          placeholder="Your Name"
          disabled={submitting} />
        <Field
          name="email"
          type="input"
          component={renderField}
          label="Email"
          placeholder="e.g. email@domain.com"
          disabled={submitting}
        />
        <Field
          name="message"
          type="textarea"
          component={renderField}
          label="Message"
          placeholder="Enter your Message"
          disabled={submitting}
        />
        {error && <strong>{error}</strong>}
        <div className="form-group">
          <label>&nbsp;</label>
          <button type="submit" disabled={submitting} className={`${submitting ? "spinner" : ""}`}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default reduxForm({
  form: "submitTrailForm",
  validate,
  onSubmitSuccess: afterSubmit
})(TrailFrom);
