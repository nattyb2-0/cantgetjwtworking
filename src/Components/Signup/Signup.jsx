import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button>Signup</button>
      </div>
    )
  }
}
