import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from './Header';
import UserTable from './UserTable';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={8}>
            <UserTable/>
          </Grid>
          <Grid item xs={4}>
            <Form/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
