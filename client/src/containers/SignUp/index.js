import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';

class SignUp extends Component {


  renderEmail = formProps => {
    console.log(formProps, 'this is form pros');
    return (
      <Form.Input
        fluid
        icon = 'user'
        iconPosition = 'left'
        autoComplete = 'off'
        placeholder = 'Email Address'
      />
    )
  }

  render() {
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

        </Segment>
      </Form>
    );
  }
}
//HOC export
export default reduxForm({ form: 'signup' })(SignUp);