
import "./App.css";
import { Component } from "react";
import React from "react";

import * as _ from "lodash";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount(){
    
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => this.setState({ monsters: data, originMonster: data }));
  }


  onSearchChange = (event) =>{
    const searchString = event.target.value.toLowerCase();
    this.setState({searchString})
  }
  
  render() {
    const filteredMonsters = _.filter(this.state.monsters, item =>  _.includes(item.name.toLowerCase(), this.state.searchString));
    return (
      <div className="App">
      <input  type="search" placeholder="search monsters" onChange={this.onSearchChange}/>
      <CardList  monsters= {filteredMonsters} />
      </div>
    );
  }
}

export default App;
