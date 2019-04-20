import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="Appk">
        <header className="App-header">
          <p>notre èquipe</p>
          <Card url="https://robohash.org/ibrahim" titre="Brahim Jmal" job="Developer" age="25"/>
          <Card url="https://robohash.org/123" titre="software" />
          <Card url="https://robohash.org/1234" titre="cat1" />
          <Card url="https://robohash.org/12345" titre="cat2" />
        </header>
      </div>
    );
  }
}

// f(a,b) --> a+b
export default App;
