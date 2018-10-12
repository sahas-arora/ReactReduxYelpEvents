import React, { Component } from 'react';
import { connect } from 'react-redux';


class EventCost extends Component{


  renderEventCost() {

    let eventData = this.props.location;

    return eventData.map((event,index) => {
      return(
        <tr key={index}>
          <td><h1>Cost:{() => {
              if (event.cost==null){
                return (
                  <h1>$0</h1>
                );
              }
            }}</h1></td>
        </tr>
      );
    });
  }

  render() {
    return (
        <div className="list-group col-sm-5">
          <div className="list-group-item">
            <h1>{this.renderEventCost()}</h1>
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

export default connect(mapStateToProps)(EventCost);
