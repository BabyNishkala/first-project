import React,{useState, useRef, useEffect} from "react";
const Final=()=>{
    const [firstName,setfirstname]=useState("");
    const render= useRef(0);

    useEffect(()=>{
        render.current= render.current+1
    });
    return <>
        <input type="text" name="firstName" id="firstName"
         onChange={(e)=>{
            setfirstname(e.target.value);
        }}/>
        <h5>Typing:{firstName}</h5>
        <h5>Component rendered {render.current} times</h5>
    </>
};

export default Final;