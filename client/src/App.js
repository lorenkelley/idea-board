import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import HomePage from './components/HomePage'
import IdeaPage from './components/IdeaPage'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar/>
        <Switch>
          {/* switch is an optional component it is used to show one route at a time */}
          <Route exact path="/login" component={LogInPage} />
          {/* Route will take to two props : props and componenents(where we tell react router when someone goes to this place show the HomePage component) */}
          <Route exact path="/user/:userId" component={IdeaPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
