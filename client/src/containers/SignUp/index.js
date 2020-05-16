import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';

class SignUp extends Component {


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


  render() {
    console.log('inside of signup render', this.props);
    return (
      <Form size='large' >
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

        </Segment>
      </Form>
    );
  }
};
//HOC export
export default reduxForm({ form: 'signup' })(SignUp);