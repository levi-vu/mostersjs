
import "./App.css";
import { Component } from "react";
import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => this.setState({ monsters: data }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.state.monsters.map((monster) => 
          <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>)
        }
        </header>
      </div>
    );
  }
}

export default App;
