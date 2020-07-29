import React, { Component } from 'react';
import Person from './Person/Person'
    class Persons extends Component {
    

        shouldComponentUpdate(nextProps, nextState) {
            return true
            console.log('[Persons.js] shouldComponentUpdate')
        }
        
        getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('[Persons.js] getSnapshotBeforeUpdate')
            return {message : "hello"}
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[Persons.js] componentDidUpdate')
            console.log(snapshot)    
        }

        render() {
                console.log('[Persons.js] rendering..')
             return ( this.props.persons.map( (person, index) => {
                return (
                    <Person click={this.props.clicked.bind( index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={ event => this.props.changed(event, person.id)}/>
                    
                    )
            }))

            }
    }
export default Persons;


