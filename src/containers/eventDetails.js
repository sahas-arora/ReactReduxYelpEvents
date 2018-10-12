
import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventDetails extends Component {


  render() {

    if(!this.props.activeEvent){
      return <div>Click on an event to see more details</div>
    }

    return (
      <div className="list-group col-sm-2">Details:
        <div className="list-group-item">Event Name: {this.props.activeEvent.name}</div>
      <div className="list-group-item">Event description: {this.props.activeEvent.description}</div>
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
