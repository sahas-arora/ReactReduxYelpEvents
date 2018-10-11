import React, { Component } from 'react';
import SearchBar from '../containers/searchBar.js';
import EventName from '../containers/EventName.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      <EventName />
      </div>
    );
  }
}
