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


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
          <Switch>
          <Route component={SearchBar} path="/" />
          <Route component={EventName} path="/" />
          <Route component={EventDetails} path="/EventDetails" />
          </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
