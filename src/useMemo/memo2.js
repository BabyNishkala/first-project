import React, { useState } from "react";
const Title=()=>{
    console.log("title rendered");
    return <h1>Callback memo</h1>
}
const Count=({text, number})=>{
    return <h1>{text}:{number}</h1>
}
const Button =({Children, clickhandle})=>{
    return <button onClick={clickhandle}>{Children}</button>
}
const Final=()=>{
    const [age,setage] =useState(0);
    const [salary,setsalary] =useState(7000);
    
    const incrementage=()=>{
        setage(age+1);
    }
    const incrementsalary=()=>{
        setsalary(salary+1000);
    };
    return (
    <>
        <Title/>
        <Count text={"age"} number={age}/>
        <Button clickhandle={incrementage} >increment age</Button>
        <Count text={"salary"} number={salary}/>
        <Button clickhandle={incrementsalary}>increment salary</Button>

    </>);
}
export default Final;