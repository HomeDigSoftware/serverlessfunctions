import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/Card-List/Card-list.Component';
import { SearchBox } from './components/search-box/Search-box.component.jsx'


class App extends Component {

  constructor(){
    super();

    this.state = {
     monsters : [],
     searchField: '' , 
     title: '',
  };

};
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));

}

handleChange = (event) => {
      this.setState({searchField: event.target.value , title: event.target.value})
}

  render() {
    const {monsters , searchField , title} = this.state;
    const filterd_monsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">  
      <h1> archiv assas </h1>
      <p>{title}</p>
        <SearchBox 
                placeholder='search monsters'
                handle_change={this.handleChange}
             />
        <CardList monsters = {filterd_monsters} /> 
     
    </div>
  );
 }
}

export default App;
