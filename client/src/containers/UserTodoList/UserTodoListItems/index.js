import React from 'react';
import { Header, List, Button } from 'semantic-ui-react';

export default (props) => {
  if (props.todo.length === 0) {
    return <Header content='No Todos yet. Please add a Todo'/>
  } else {
    return props.todos.map(({_id, completed, text}) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left'>
           <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px' }}>{text}</p>
          </List.Content>
          <List.Content floated= 'right'>
            <Button color='blue' content = 'Mark as Complete' size='small'/>
          </List.Content>
        </List.Item>
      );
    });
  }
};


