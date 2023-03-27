
import "./App.css";
import { Component } from "react";
import React from "react";

import * as _ from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
      originMonster: []
    };
  }

  componentDidMount(){
    
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => this.setState({ monsters: data, originMonster: data }));
  }
  
  render() {
    return (
      <div className="App">
      <input  type="search" placeholder="search monsters" onChange={(event) => {
        const lowerKey = event.target.value.toLowerCase();
        this.setState(state => {
          return {
            monsters : _.filter(state.originMonster, item =>  _.includes(item.name.toLowerCase(), lowerKey))
          }
      
        }, () => {
          console.log(this.state.monsters);
        })
      }}/>
        {
          this.state.monsters.map((monster) => 
          <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>)
        }
      </div>
    );
  }
}

export default App;
