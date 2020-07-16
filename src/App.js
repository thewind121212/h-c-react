import React , { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import styled from 'styled-components'
import { render } from '@testing-library/react';


const StyledButton = styled.button`
      background-color: ${ props => props.alt ? 'red' : 'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      &:hover  {
      background-color: white;
      color: black
      }
`

class App extends Component  {
   state = {
    persons: [
      {id:"ss130212", name: "linh", age:18},
      {id:"ss130213", name: "xu", age:11},
      {id:"ss130214", name: "chien", age:13}
    ],
    otherState: 'something value',
    showPerson: false
  };

     deleteNameHandler = (indexOfName) => {
        const persons = [...this.state.persons];
        persons.splice(indexOfName, 1);
        this.setState({persons:persons}) 
        console.log(persons)
     }

     nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex( p => {
        return p.id === id
      })
      const person = {
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value;
      const persons = [...this.state.persons]
      persons[personIndex] = person;
      this.setState({persons:persons})
      
    }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
    console.log(this.state)
  }      


  
        


      render(){
                let person = null;
        if (this.state.showPerson) {
          person = (
            <div>
              {this.state.persons.map( (person, index) => {
                return (
                  <Person click={this.deleteNameHandler.bind(this, index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={ event => this.nameChangeHandler(event, person.id)}/>
                    
                      )
            })
              }
            </div> )
          console.log(StyledButton)
        }

        const classes = [];
        if (this.state.persons.length < 3) {
          classes.push('red')
        }
        if (this.state.persons.length < 2) {
          classes.push('bold')
        }

        return (
          <div className="App"> 
        <h1>Hi, I' m react app</h1>
        <p className={classes.join(' ')}>This is my project</p>
        <StyledButton onClick={this.togglePersonHandler}
                      alt={this.state.showPerson}
        >Switch Name</StyledButton>
          {person}
      </div>
    )
      }
 
      

}


export default App;

