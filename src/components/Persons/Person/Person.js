import React, { Component } from 'react';
import styled from 'styled-components'
import classes from './Person.css'
  

class Person extends Component {
        render() {
        console.log('[Person.js] rendering...')
            return(
    <div className={classes.Person}>
    <p onClick={this.props.click}>I'm {this.props.name} now I {this.props.age}</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} />
    </div>)
            }
 
}

export default Person;