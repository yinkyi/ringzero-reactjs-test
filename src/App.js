import './App.css';
import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
        <Route path='/' exact>
            <HomePage/>
        </Route>             
        <Route path='*'>
          <Redirect to="/"/>
        </Route>
    </Switch>
  );
}

export default App;
