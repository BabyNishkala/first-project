import React, { useRef, useState,useEffect } from "react";
const Final =()=>{
    const [firstName,setfirstname] = useState('');
    const inputDom=useRef("");

    useEffect(()=>{
        console.log(inputDom);
    });
    const focus=()=>{
        inputDom.current.focus();
        //inputDom.current.value="Type Here";
    }
    return <div>
        <input 
        ref={inputDom}
        type="text" name="firstNane" id="firstName" 
        onChange={(e)=>setfirstname(e.target.value)}/>
        <h5>Typing:{firstName}</h5>
        <button onClick={focus}>focus</button>
    </div>
}
export default Final;