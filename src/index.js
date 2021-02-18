import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Screens/Login';
import Register from './Screens/Registration';
import Notfound from './Screens/Notfound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"

const routing = (
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path component={Notfound} />
  </Switch>
</BrowserRouter>
);

ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
