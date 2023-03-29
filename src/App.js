import "./App.css";
import {useState} from "react";
import { Component } from "react";

import * as _ from "lodash";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// const App = () => {

//   const [searchString, setSearchString] = useState('');
//     const onSearchChange = (event) => {
//     const search = event.target.value.toLowerCase();
//     setSearchString(search);
//   };

//   return (
//     <div className="App">
//             <SearchBox
//               className="monster-search-box"
//               onChangeHandler={onSearchChange}
//               placeHolder="search monster"
//             ></SearchBox>
//            {/* <CardList monsters={filteredMonsters} /> */}
//     </div>
//     )
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("mount");
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data}));
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  };

  render() {
    console.log("render");
    const filteredMonsters = _.filter(this.state.monsters, (item) =>
      _.includes(item.name.toLowerCase(), this.state.searchString)
    );
    return (
      <div className="App">
        <SearchBox
          className="monster-search-box"
          onChangeHandler={this.onSearchChange}
          placeHolder="search monster"
        ></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
