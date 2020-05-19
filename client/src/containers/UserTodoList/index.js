import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';
import { compose } from 'redux'; //make our export default cleaner
import axios from 'axios';

import { getUserTodos } from './../../actions/todos';

class UserTodoList extends Component {


  componentDidMount() {
    this.props.getUserTodos()
  }

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


// function mapStateToProps(state) {
//   return {
//     todos: state.todos.userTodos,
//     clientError: state.todos.getUserTodosClientError,
//     serverError: state.todos.getUserTodosServerError
//   };


// }


function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError}}) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError
  };
}

export default  reduxForm({ form: 'addTodo' })(connect(mapStateToProps,{ getUserTodos }) (UserTodoList));


// export default compose(
//   reduxForm({ form: 'addTodo' }),
//   connect(mapStateToProps, { getUserTodos })
// )(UserTodoList);