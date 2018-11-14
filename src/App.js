import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvHao5CktsChW1sGXA1r_oMe5ZxD5-gVE",
    authDomain: "blocchatreact-782d6.firebaseapp.com",
    databaseURL: "https://blocchatreact-782d6.firebaseio.com",
    projectId: "blocchatreact-782d6",
    storageBucket: "blocchatreact-782d6.appspot.com",
    messagingSenderId: "736089516818"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null,
      user: null
    };
  }

  setActiveRoom(room) {
    this.setState({activeRoom: room});
  }

  setUser(user) {
  this.setState({user: user});
}


  render() {
    return (
      <div className="App">
      <aside id="sidebar">
      <h1 className="App-title">Bloc Chat</h1>
      <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} />
      </aside>
      <aside id="sidebar-bottom">
      <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
      </aside>
      <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>
    );
  }
}

export default App;
