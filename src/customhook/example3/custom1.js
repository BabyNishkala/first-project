import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Final =()=>{
    const [userdata,setuserdata] = useState([]);
    const [loading,setloading]= useState(false);
    const [iserror,setiserror]=useState(false);

    const makeApi= async ()=>{
        setloading(true);
        setiserror(false);
       try {
        const response= await fetch(URL);
        const data = await response.json();
        setuserdata(data);
        setloading(false);
       } catch (error) {
        iserror(true);
        setloading(false);
       }

    }
    useEffect(()=>{
        makeApi(URL);
    }, []);

    if (iserror){
        return <h3>Something is wrong....</h3>
    }
    if (loading){
        return <h3>Loading....</h3>;
    }
    return (
        <div>
            <h1>users</h1>
            <ul>
                {userdata.map((eachuser) =>{
                    return <li key={eachuser.id}>{eachuser.username}</li>;
                })}
            </ul>
        </div>
    );
};
export default Final;