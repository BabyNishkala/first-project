import React, { useState, useEffect } from "react";
const url="https://jsonplaceholder.typicode.com/users"
const Final=()=>{
    const [userdata,setuserdata]=useState([]);
    const [loading,setloading] = useState(false);
    const[error,seterror]= useState({status:false, msg:''});
    const fetchuserdata= async(apiurl)=>{
        setloading(true);
        seterror({status:false, msg:''})
        try{
            const response= await fetch(apiurl);
        const data= await response.json();
        setuserdata(data);
        setloading(false);
        seterror({status:false,msg:''})
        }catch(error){
            setloading(false);
            seterror({status:true, msg:'something went wrong, pls try again!'})
        }
    };
    useEffect(()=>{
        fetchuserdata(url)
    },[])
    if (loading){
        return <div>
            <h3>loading....</h3>
        </div>
    }
    if (error?.status){
        return(
            <div>
                <h3 style={{color:'red'}}>{error?.msg}</h3>
            </div>
        )
    }
    return(
        <div>
            <h1>Hello</h1>
            <ul>
                {
                    userdata.map((eachuser)=>{
                        const {id,name,email}= eachuser;
                        return<li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};
export default Final;