import React, { useState } from "react";
import usePagetitle from "./usepage";
const Final2=()=>{
    const [count,setcount] =useState(0);
  usePagetitle(count);
    return (
    <div>
        <button onClick={()=>setcount(count+1)}>Count-{count}</button>
    </div>
    );
}
export default Final2;