import React, { Component } from 'react';
import EventName from '../containers/eventName';
import SearchBar from '../containers/searchBar';
import EventDetails from '../containers/eventDetails';


class Home extends Component {
  render () {
    return (
      <div>
      <SearchBar />
      <EventName />
  </div>
    );
  }
}

export default Home;
