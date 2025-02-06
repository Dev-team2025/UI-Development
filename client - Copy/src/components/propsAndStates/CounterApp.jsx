/* 
state is used to manage data that can change over time within a component.
*/
import React, { Component } from 'react'

export default class CounterApp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
