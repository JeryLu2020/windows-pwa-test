import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import NavbarTop from './Navs/NavbarTop';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  return (
    <div>
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}

export default App;


// Material-UI
// https://material-ui.com/getting-started/installation/