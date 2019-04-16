import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './layout/Header'
import Home from './home/Home'


class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
