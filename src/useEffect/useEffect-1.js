import React,{useEffect, useState} from "react";
const Index =() =>{
    const [count,setcount]=useState(0);
    const [pagewidth,setpagewidth] =useState(window.innerWidth);
    useEffect(() =>{
       const resizehandler= window.addEventListener("resize",()=>{
            setpagewidth(window.innerWidth);
        })
        console.log("heyyyy");
        return()=>{
            window.removeEventListener('resize',resizehandler);
        };
    },[count]);
   return (
   <div>
    <h1>Hello Everyone</h1>
    <h1>{pagewidth}</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
        setcount(count+1);
    }}>+</button>
    </div>
    ); 
};
export default Index;