import React from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {
    let btnStyle = [];
    if (props.showPerson) {
        btnStyle = (classes.Change);
    }

       const pClasses = [];
        if (props.persons.length < 3) {
          pClasses.push(classes.red)
        }
        if (props.persons.length < 2) {
          pClasses.push(classes.bold)
        }
 
        return ( 
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={pClasses.join(' ')}>This is my project</p>
        <button className={btnStyle} onClick={props.show}
        >Switch Name</button>
        </div>
        )
}

export default cockpit;