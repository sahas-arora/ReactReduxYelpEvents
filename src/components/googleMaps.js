

import React, { Component } from 'react';

class GoogleMap extends Component {


  componentDidMount(){
    console.log(this.props);

    let map = new google.maps.Map(this.refs.map, {
        zoom: 16,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      });

    let marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: this.props.lat, lng: this.props.lon}
        });
        marker.addListener('click', toggleBounce);
        console.log("marker is" , marker);

    let toggleBounce = function() {
      if(marker.getAnimation() !== null) {
        marker.setAnimation(null);
      }
      else{
        marker.setAnimation(animation: google.maps.Animation.BOUNCE);
      }
    }
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
