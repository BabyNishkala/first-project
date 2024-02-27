import {useState} from 'react'

function Usecounter(initialcount=0) {
    const [count,setcount] = useState(initialcount);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement =()=>{
        setcount(count-1);
    }
    const reset=()=>{
        setcount(initialcount);
    };
    return [count,increment,decrement,reset];
}

export default Usecounter;