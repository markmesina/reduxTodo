import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Navbar from './../../components/Navbar'
class App extends Component {
  render() {
    return  (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style ={{ maxWidth: 700 }}>
        <Navbar/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;