import React, { Component } from 'react';
import './App.css';
import Connect from './connect/Connect';

class App extends Component {

  state = {
    token: ''
  }

  checkLoggedIn = () => {
    // check to see if we have a saved auth token which will determine which component is displayed
    const nanoleafz = JSON.parse(localStorage.getItem("nanoleafz" || "{}"))
    if (!nanoleafz) {
      return
    } else {
      this.setState({token: nanoleafz.token})
    }
  }

  componentDidMount() {
    this.checkLoggedIn()
  }

  render() {
    return (
      <>
      {
        this.state.token ? null : <Connect />
      }
        
      </>
    );
  }
}

export default App;
