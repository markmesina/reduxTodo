import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';
import { compose } from 'redux'; //make our export default cleaner
import axios from 'axios';

import { getUserTodos } from './../../actions/todos';
import { ADD_TODO_ERROR } from './../../actions/types';

class UserTodoList extends Component {


  onSubmit = async (formValues, dispatch) => {
    try {
      //1st param url, 2nd param - what parameters u want to send to server, 3rd param: options - in this case, token
      await axios.post('/api/user/todos', formValues, { headers: {'authorization': localStorage.getItem('token')} });
      this.props.getUserTodos();

    } catch (e) {
      dispatch({ type: ADD_TODO_ERROR, payload : e });
    }

  }

  componentDidMount() {
    this.props.getUserTodos()
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
    const { handleSubmit } = this.props; //under redux-form
    return (
      <>
        <Header as='h2' color ='teal' textAlign='center' content='Welcome to the todo App'/>
        <Form size='large' onSubmit ={ handleSubmit(this.onSubmit) }>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
            />
            <Button
              type='submit'
              fluid
              color='teal'
              content='Add a todo'
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