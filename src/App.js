import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>

        <RoomList

          firebase = { firebase }

         />

      </div>
    );
  }
}

export default App;
