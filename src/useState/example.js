import React,{useState} from "react";
const Index =()=>{
    const [showData,setshowData]= useState(false);
    const handle=()=>{
        setshowData(!showData);
    }
    return (
        <div className="content">
            <button onClick={handle}>{showData?"hide":"show"}</button>
            {showData &&(
                <div className="content">
                "Hi there, u clicked me"
            </div>
            )}
        </div>
    );
};
export default Index;