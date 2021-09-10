import './App.css';
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import People from './components/People';
import Form from './components/Form';
import Planets from './components/Planets';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Form />
        <Switch>
          <Route exact path = "/people/:id">
            <People />
          </Route>
          <Route exact path = "/planets/:id">
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
