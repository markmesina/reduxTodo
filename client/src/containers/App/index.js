import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
class App extends Component {
  render() {
    return  (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style ={{ maxWidth: 700 }}>

        </Grid.Column>
      </Grid>
    );
  }
}

export default App;