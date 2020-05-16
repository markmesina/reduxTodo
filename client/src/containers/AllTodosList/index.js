import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';

import moment from 'moment';



class AllTodosList extends Component {
  render() {
    return (
      <List celled selection size ='huge'>
        <List.Item>
          <List.Content>
            <List.Header>Some future todo</List.Header>
            <List.Description>Created: {moment().fromNow()}</List.Description>
          </List.Content>
        </List.Item>

      </List>
    );
  }
}

export default AllTodosList;