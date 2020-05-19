import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';
import { compose } from 'redux'; //make our export default cleaner
import axios from 'axios';

class UserTodoList extends Component {


  onSubmit = () => {

  }

  renderAddTodo = ({ input, meta }) => {
    return(
      <>
        <Form.Input
          {...input}
          error={ meta.touched && meta.error }
          fluid
          autoComplete = 'off'
          placeholder='Add a todo'
        />

      </>
    )
  }

  render() {
    return (
      <>
        <Header as='h2' color ='teal' textAlign='center' content='Welcome to the todo App'/>
        <Form size='large'>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
            />
          </Segment>
        </Form>
      </>
    );
  }
}

export default UserTodoList;