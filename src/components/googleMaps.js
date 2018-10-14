

import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {

    new google.maps.Map(this.refs.map, {
      zoom: 0,
      center: {
        lat: parseFloat(this.props.latitude),
        lng: parseFloat(this.props.longitude)
      }
    });
  }

  render() {
    return(
      <div ref="map" />
    );
  }
}


export default GoogleMap;
