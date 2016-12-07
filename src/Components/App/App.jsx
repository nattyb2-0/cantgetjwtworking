import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      signupForm: {
        username: '',
        password: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      currentToken: ''
    }
  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    //skylar pls remember to consolelog fieldsArr
    this.setState({
      signupForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      loginForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  postSignup() {
    console.log('clicked')
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signupForm.username,
        password: this.state.signupForm.password
      })
    })
    .then((data) => {
      this.setState({
        signupForm: {
          username: '',
          password: ''
        }
      })
    })
  }

  postLogin() {
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.loginForm.username,
        password: this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        loginForm: {
          username: '',
          password: ''
        }
      }, () => {
        console.log(this.state)
      })
    })
  }

  testLogin() {
    console.log(this.state.currentToken)
    fetch('/api', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` + this.state.currentToken
      }
    })
    .then((data) => {
      console.log(data)
    })
  }

  logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    })
  }

  render() {
    return(
      <div>
        <Signup
          trackSignupForm={this.trackSignupForm.bind(this)}
          postSignup={this.postSignup.bind(this)}
        />
        <Login
          trackLoginForm={this.trackLoginForm.bind(this)}
          postLogin={this.postLogin.bind(this)}
          logout={this.logout.bind(this)}
        />
        <TestLogin
          testLogin={this.testLogin.bind(this)}
        />
      </div>
    )
  }
}
