import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}


/* props(short form of properties ) used to pass data from one compoent to another,
-usually from parent to child components.
props are read only and should not be modified by the child componet 
*/