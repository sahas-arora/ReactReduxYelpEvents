import React, { Component } from 'react';
import { connect } from 'react-redux';


class EventName extends Component {

  renderEventName(eventData){
    console.log("Event data: ", eventData);

    return(
      <tr>
        <td><h1>{eventData.data.events.map(event => event.name)}</h1></td>
    </tr>
);
  }

  render(){
    return (
      <div>
        <table>
          <thead>
            <th>Event Name</th>
          {this.renderEventName}
          </thead>
        </table>
      </div>
    );
  }
}

let mapStateToProps = function(state){
  return {
  location: state.location
};
}

export default connect(mapStateToProps)(EventName);
