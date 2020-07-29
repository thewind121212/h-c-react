import React , { Component } from 'react'
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import { render } from '@testing-library/react';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component  {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }
   state = {
    persons: [
      {id:"ss130212", name: "linh", age:18},
      {id:"ss130213", name: "xu", age:11},
      {id:"ss130214", name: "chien", age:13}
    ],
    otherState: 'something value',
    showPerson: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeviredStateFromProps')
    return state;
  }


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

    componentDidMount() {
      console.log('[App.js] componentDidMount')
    }

      render(){
        console.log('[App.js] render')
        let person = null;
                let buttonStyle = '';
        if (this.state.showPerson) {
          person = (
            <div>
              <Persons  persons = {this.state.persons} 
                        clicked = {this.deleteNameHandler}
                        changed = {this.nameChangeHandler}/>
            </div> )
        }

       

        return (
          <div className={classes.App}> 
          <Cockpit  title = {this.props.appTitle}
                    showPerson = {this.state.showPerson}
                    persons = {this.state.persons}
                    show = {this.togglePersonHandler}/>
          {person}
      </div>
    )
      }
 
      

}


export default App;

