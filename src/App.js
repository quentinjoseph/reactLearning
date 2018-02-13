import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {id: '1', name: 'Quentin', age: 700},
      {id: '2', name: 'Goof Shoes', age: 92},
      {id: '3', name: 'Stinky Pete', age:53}
    ],
    otherState: 'other stuff in here',
    togglePeople: false
  }

nameChangeHandler = (event, id)=>{
  const personIndex = this.state.people.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.people[personIndex]
  };
  person.name = event.target.value;

  const people = [...this.state.people];
  people[personIndex]=person;

  this.setState(
    {people: people}
  );

}
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.people.slice();  this works but is less modern than this below
    const persons = [...this.state.people];
    persons.splice(personIndex, 1);
    this.setState({people: persons});
  }

  togglePeopleHandler = ()=>{
    const doesShow = this.state.togglePeople;
    this.setState({
      togglePeople: !doesShow
    });
  }
  // RENDER
  render() {
    const button = document.querySelector('button');
    const style = {
      'backgroundColor': 'green',
      'color': 'white',
      'font': 'sans-serif',
      'border': '1px solid grey',
      'padding': '8px',
      'margin':'20px 0',
      'cursor': 'pointer',
      'outline': 'none'
    };

    let showit = null;
    if (this.state.togglePeople){
      showit =(
      <div >
        {
          this.state.people.map((person, index) => {
          return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangeHandler(event, person.id)} />
          })
        }
      </div>
      );
      style.backgroundColor = 'red';
    };
    let classes = []
    if(this.state.people.length <= 2){
      classes.push('red');
    }
    if(this.state.people.length <= 1){
      classes.push('bold');
    }
    if(this.state.people.length === 0){
      classes = [];
    }
    return (

        <div className="App">
          <p className={classes.join(' ')}>number of people: {this.state.people.length}</p>
          <button style = {style} onClick={this.togglePeopleHandler} >Show Stuff</button>
          {showit}
        </div>

    );
  }
}

export default App;
