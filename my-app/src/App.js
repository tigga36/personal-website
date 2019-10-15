import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
}

export default App;