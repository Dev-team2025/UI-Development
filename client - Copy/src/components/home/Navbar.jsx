/* class components are es6 classes that extends from React.Componemnt . 
they can have state and lifecycle of component
-class component is a stateful component.

class component is extended from React.Componemnt
which is declared inside node module.
render()

- constructor() is a special method that runs before the render method.
constructors are used to initialize the variables of the given component

super(): this method or statement is used to call super class constructor.(i.e. Component)

- state: state is an object that holds the data that the component needs to remember.
this : is used to point out the class variables and the values that users are sharing 
*/
import React, { Component } from 'react'

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            message: "Hello world"
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
