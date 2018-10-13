import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './containers/searchBar.js';
import EventName from './containers/eventName.js';
import EventDetails from './containers/eventDetails';
import Home from './components/home.js';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
          <Switch>
            <Route exact component={EventDetails} path="/EventDetails" />
            <Route exact component={Home} path="/" />
          </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
