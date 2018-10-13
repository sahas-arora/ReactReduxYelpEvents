
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentEvent } from '../actions/index';

class EventDetails extends Component {
  //
  //  componentDidMount() {
  //   return <div>Click on an event to see more details</div>
  // }


  render() {

    if(!this.props.activeEvent){
      return <div>Click on an event to see more details</div>
    }

    if(!this.props.activeEvent.cost || this.props.activeEvent.cost == 0){
      this.props.activeEvent.cost = 'Free Entry.';
    }

    return (
      <div className="text-xs-right">
      <div className="list-group col-sm-6">Details:
        <div className="list-group-item">Event: {this.props.activeEvent.name}</div>
      <li className="list-group-item">About: {this.props.activeEvent.description}</li>
    <li className="list-group-item">Address: {this.props.activeEvent.location.address1}, {this.props.activeEvent.location.city}, {this.props.activeEvent.location.country}</li>
      <li className="list-group-item">Entry Fee: {this.props.activeEvent.cost}</li>
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
