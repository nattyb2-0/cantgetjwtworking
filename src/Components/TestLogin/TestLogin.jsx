import React, { Component } from 'react';

export default class TestLogin extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.testLogin}>TestLogin</button>
      </div>
    )
  }
}
