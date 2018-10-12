import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentEvent } from '../actions/index';
import { bindActionCreators } from 'redux';


class EventName extends Component {

  constructor(props){
    super(props);

    this.state = { location: ''};
  }

  renderEventName(){
    const eventData = this.props.location;
    console.log("Event data: ", eventData);

    return eventData.map((event, index) => {
      console.log(index);
      return (
        <li className="list-group" key={index}>
          Event {index+1}
          <ul className="list-group-item"
              onClick={() => {
                console.log("Sahas")
               this.props.currentEvent(event)
             }}>
              {event.name}
             </ul>
      </li>
      );
    })
  }

  render(){
    return (
      <div className="list-group col-sm-12">
        <div className="list-group-item">
          <h1>{this.renderEventName()}</h1>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function(state){
  return {
  location: state.location
};
}

let mapDispatchToProps = function(dispatch){
  return bindActionCreators({currentEvent: currentEvent}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventName);
