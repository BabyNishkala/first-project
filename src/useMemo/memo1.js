import React, { useMemo, useState } from "react";
const Final=()=>{
    const [number,setnumber]=useState(0);
    const [dark,setdark]=useState(false);
    const doublenumber= useMemo(()=>{
        return slowfunction(number);
    },[number]);

    const theme = useMemo(()=>{
       return{
        backgroundColor: dark?"black": "white",
        color:dark?"white": "black",
       };
    },[dark]);
    return <>
    <div>
        <input 
        type= "number" 
        name= "number" 
        id= "number"
        value={number}
        onChange={(e)=> setnumber(Number(e.target.value))}
        />
    </div>
    <div>
        <br></br>
    </div>
    <div>
        <button onClick={()=>setdark(!dark)}>Change Theme</button>
    </div>
    <div>
        <h2 style={theme}>the number is : {doublenumber}</h2>
    </div>
    </>
};
const slowfunction =(number) =>{
    for (let index = 0; index < 1000000; index++) {
        return number*2;  
    };
}
export default Final;