

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { inputValue: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {

    this.setState({ inputValue: event.target.value});
  }

  onFormSubmit(event) {

    event.preventDefault();

    this.props.fetchList(this.state.inputValue);
    this.setState({ inputValue: '' });
  }


  render() {
    return (
        <form className='input-group' onSubmit={this.onFormSubmit} >
          <input
            placeholder="Enter your location here"
            className="form-control"
            value={this.state.inputValue}
            onChange={this.onInputChange}
           />
          <span className="input-group-btn" >
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );

  }
}


// let mapStateToProps = function(state){
//
//   return {
//     location: state.location
//   }
// }

let mapDispatchToProps = function(dispatch){
  return bindActionCreators({ fetchList }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
