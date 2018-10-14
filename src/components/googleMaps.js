

import React, { Component } from 'react';

class GoogleMap extends Component {


  componentDidMount(){
    console.log(this.props);

    new google.maps.Map(this.refs.map, {
      zoom: 20,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });


  }

  componentDidUpdate() {

    console.log(this.props);

    new google.maps.Map(this.refs.map, {
      zoom: 20,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });

  }

  render() {
    return(
      <div ref="map" className="showMap" />
    );
  }
}


export default GoogleMap;
