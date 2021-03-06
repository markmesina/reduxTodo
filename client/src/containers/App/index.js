import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux' //allows access to store/state
import Counter from './../Counter'
import AllTodosList from './../AllTodosList'
import SignUp from './../SignUp'
import SignOut from './../SignOut'
import SignIn from './../SignIn'
import UserTodoList from './../UserTodoList'
import Navbar from './../../components/Navbar'

class App extends Component {
  render() {
    return  (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style ={{ maxWidth: 700 }}>
        <Navbar isLoggedIn = { this.props.authenticated}/>
        <Route exact path = '/counter' component = {Counter}/>
        <Route exact path = '/usertodos' component = {UserTodoList}/>
        <Route exact path = '/alltodos' component = {AllTodosList}/>
        <Route exact path = '/signout' component = {SignOut}/>
        <Route exact path = '/signin' component = {SignIn}/>
        <Route exact path = '/' component = {SignUp}/>
        </Grid.Column>
      </Grid>
    );
  }
}

//declare mapStatetoProps
function mapStateToProps(state) { 
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps) (App);