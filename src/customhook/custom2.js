import React from "react";
import Usecounter from "./usecounter";
const Final=()=>{
    const [count,increment,decrement,reset]= Usecounter(10);
    return (
    <div>
        <h1>Count : {count}</h1>
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    </div>
    );
}
export default Final;