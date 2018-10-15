
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentEvent } from '../actions/index';
import GoogleMap from '../components/googleMaps.js';
import { Link } from 'react-router-dom';

class EventDetails extends Component {
  //
  //  componentDidMount() {
  //   return <div>Click on an event to see more details</div>
  // }


  render() {


    if(!this.props.activeEvent){
      return <div></div>
    }

    if(!this.props.activeEvent.cost || this.props.activeEvent.cost == 0 || this.props.activeEvent.cost == 'Free Entry.') {
      this.props.activeEvent.cost = 'Free Entry.';
    }
    else if(this.props.activeEvent.cost) {
      this.props.activeEvent.cost = "$" + this.props.activeEvent.cost;
    }

    let lat = this.props.activeEvent.latitude;
    console.log(lat);
    let lon = this.props.activeEvent.longitude;
    console.log(lon);

    return (
      <div className="text-xs-right">
      <div className="list-group col-sm-6">Details:
        <div className="list-group-item">Event: {this.props.activeEvent.name}</div>
      <li className="list-group-item">About: {this.props.activeEvent.description}</li>
    <li className="list-group-item">Address: {this.props.activeEvent.location.address1}, {this.props.activeEvent.location.city}, {this.props.activeEvent.location.country}</li>
      <li className="list-group-item">Entry Fee: {this.props.activeEvent.cost}</li>
      <Link to="/" className="btn btn-primary">Back</Link>
      </div>

        <div>
        <GoogleMap lat={lat} lon={lon} />
        </div>
    </div>



    );
  }
}

let mapStateToProps = function(state) {
  return {
    activeEvent: state.activeEvent
  };
};

export default connect(mapStateToProps)(EventDetails);
