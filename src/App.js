import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    people: [
      {name: 'Quentin', age: 700},
      {name: 'Goof Shoes', age: 92},
      {name: 'Stinky Pete', age:53}
    ],
    otherState: 'other stuff in here'
  }
switchOne = () => {
  this.setState(
      {
        people: [
            {name: 'Quentin Joseph', age: 700},
            {name: 'GoofShoes McGhee', age: 92},
            {name: 'Boogie Boogie Jones', age:53}
            ]
      }
  );

}
  switchStuffHandler = () => {
    this.setState({
      people: [
      {name: 'Quentin Joseph', age: 1200},
      {name: 'Goof Shoes McGhee', age: 92},
      {name: 'Stinky Pete', age:75}
      ]
    })
    console.log('Was Clicked Sucka');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1><span role="img">🤯</span></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Playground</h1>
        </header>
        <button onClick={this.switchStuffHandler} >Switch Stuff</button>
        <p>Oooooo <span role="img">😮</span> Reacty</p>
        <Person name={this.state.people[0].name} stuff="React" age={this.state.people[0].age} click={this.switchOne} ><p>{this.state.people[2].name}</p></Person>

      </div>
    );
  }
}

export default App;
