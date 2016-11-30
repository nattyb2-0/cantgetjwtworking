import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button>Login</button>
      </div>
    )
  }
}
