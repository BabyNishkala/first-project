import React,{useState} from "react";
const Index=()=>{
    console.log(useState());
    const [count,setCount] = useState(0);
    const increment=()=>{
        setCount((prevCount)=>{
            return prevCount+1;
        });
        setCount((prevCount)=>{
            return prevCount+1;
        });
    }
    
    const decrement =() =>{
        setCount(count-1);
        
    }
        return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};
export default Index;