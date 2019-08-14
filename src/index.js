import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage'
import PopularHeroes from './components/PopularHeroes/PopularHeroes'
import Navigation from './Layouts/Navigation/Navigation'

const routing = (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/heroes" exact component={App} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/popular" exact component={PopularHeroes} />
      <Route path="/heroes/:id" component={Hero} />
    </Switch>
  </Router>
);



ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
