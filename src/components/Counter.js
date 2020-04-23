import React from 'react';

const Counter = (props) => {
    return(
    <React.Fragment>
        <h1>Counter <span>{props.count}</span></h1>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
    </React.Fragment>
    )
}

export default Counter;