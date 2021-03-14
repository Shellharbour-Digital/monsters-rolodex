import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    //super calls the constructor method on the component class. this means it gives us access to this.state
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }));
  }

  handelChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handelChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
