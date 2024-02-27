import React,{useState} from "react";
const Index=()=>{
    const [firstname,setfirstname]= useState("");
    const[email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handleinput=(e, name)=>{
        console.log(e.target.value,name);
        if (name==="firstname"){
            setfirstname(e.target.value);
        }else if(name==="email"){
            setemail(e.target.value);
        }else if(name==="password"){
            setpassword(e.target.value);
        }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        let userObj={
            firstname:firstname,
            email:email,
            password:password,
        };
        console.log(userObj);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <input 
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                placeholder="enter your name"
                onChange={(e)=>handleinput(e, "firstname")}/>
                </div>
                <div> 
                <input 
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="enter your email"
                onChange={(e)=>handleinput(e,"email")}/>
                </div>
               <div>
                <input 
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="enter your password"
                onChange={(e) =>handleinput(e,"password")}/>
                </div>
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Index;