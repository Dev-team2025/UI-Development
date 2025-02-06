import React, { useState } from 'react'
/* 
-introduced in 16.8 version
hooks are used to manage component states, handle side effecrs and share reusable logic across components 
-if we have hooks concepts then we can avoid using class component because now we have all the features similar to class components in functional component only 

syntax for usestae:
const[state,setState]=useSate(initialState);
*/
function CounterFunction() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment-Function</button>
            <button onClick={Decrement}>Decrement-Function</button>
        </div>
    )
}

export default CounterFunction
