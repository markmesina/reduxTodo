import React, { Component } from 'react';
import { Field, reduxForm, formValues, submit } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR } from './../../actions/types';

class SignUp extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload:data.token });
      this.props.history.push('/counter'); //redirects user to /counter page
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }


  renderEmail = ({ input, meta }) => {
    console.log(meta)
    return (
      <Form.Input
        {...input}
        error = { meta.touched && meta.error }
        fluid
        icon = 'user'
        iconPosition = 'left'
        autoComplete = 'off'
        placeholder = 'Email Address'
      />
    );
  }

  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error = { meta.touched && meta.error }
        fluid
        type='password'
        icon='lock'
        iconPosition = 'left'
        autoComplete = 'off'
        placeholder = 'Password'
      />
    );
  }

//handle submit w/ 3 arguments: (name : value field, direct access to dispatch, whatever value we could think of to help)
  render() {
    console.log('inside of signup render', this.props);
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Form size='large' onSubmit = {handleSubmit(this.onSubmit)} >
        <Segment stacked>
          <Field
          name='email'
          component={ this.renderEmail }
          validate={
            [
              required({ msg: 'Email is required' }),
              email({ msg: 'Please provide a valid email adress' })
            ]
          }
          />
          <Field
            name = 'password'
            component = {this.renderPassword}
            validate = {
              [
                required({msg: 'You must provide a password'}),
                length({ min: 6, msg: 'Password must be at least 6 characters' }),
              ]
            }
          />
          <Button
            content = 'Sign Up'
            color = 'teal'
            fluid
            size = 'large'
            type = 'submit'
            disabled = { invalid || submitting || submitFailed }

          />

        </Segment>
      </Form>
    );
  }
};


//validates if email exists in database
const asyncValidate = async formValues => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email already exists, please sign up with a different email' };
  }
}

//HOC or Higher Order Component export
export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: ['email'] })(SignUp);