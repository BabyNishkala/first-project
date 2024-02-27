import React,{useReducer,useEffect, useState} from "react";
const reducer=(state,action)=>{
    if(action.type ==="UPDATE_USER_DATA"){
        return {
            ...state,
            userdata: action.payload,
        }
    }
    if (action.type==="DELETE_USER"){
        const newuser= state.userdata.filter((eachuser)=>eachuser.id !== action.payload);
        return {
            ...state,
            userdata:newuser,
        };
    }
    if (action.type==="ONCLICK_EDIT"){
        return {
            ...state,
            isediting:action.payload,
        }
    }
    if(action.type==="UPDATE_USER"){
        const newuser= state.userdata.map((eachuser)=>{
            if (eachuser.id === action.payload.id){
                return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email: action.payload.email,
                }
            }else{
                return eachuser;
            }
            
        });
        return {
            ...state,
            userdata:newuser,
        }; 
    }
    return state;
}
const Final=()=>{
    const fetchuserdata = async (url)=>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"Error",payload:{status:false, msg:''}});
        try {
            const response =await fetch(url);
        const data =await response.json();
        dispatch({ type:"UPDATE_USER_DATA",payload:data});
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"Error",payload:{status:false, msg:''}});
        } catch (error) {
            dispatch({type:"LOADING",payload:false});
            dispatch({type:"Error",
            payload:{status:false, msg:error.message},});
        }

    };
    useEffect(()=>{
        fetchuserdata('https://jsonplaceholder.typicode.com/users');
    },[]);
    const initialstate = {
        userdata:[],
        isloading: false,
        iserror:{status:false, msg: ""},
        isediting:{status:false, msg:"",name:'', email: ''},
    };
    const [state, dispatch]=useReducer(reducer,initialstate);
    const handledelete =(id)=>{
        dispatch({ type:"DELETE_USER", payload:id});
    };
    const Updatedata =( id, name, email)=>{
        dispatch({type:"UPDATE_USER", payload:(id,name,email)})
    };
    return(
        <div>
        <h1>User Information</h1>
        {state.isediting?.status && <Editform id={state.isediting.id} comingtitle={state.isediting.name} 
        comingemail={state.isediting.email} Updatedata={Updatedata}/>}
        {state.userdata.map((eachuser)=>{
            const {id,name,email} = eachuser;
            return (
                <div key={id} style={{background:"lightblue"}}>
                    <h3>{name}</h3>
                    <p>{email}</p>
                    <button onClick={()=>handledelete(id)}>Delete</button>
                    <button onClick={()=> dispatch({type:"ONCLICK_EDIT", 
                    payload:{status:true, id:id, name:name , email}})}>Edit</button>
                    </div>
            );
        })}
    </div>
    )
}
 const Editform = ({id,comingtitle,comingemail, Updatedata}) => {
    const [title,settitle]= useState(comingtitle || '');
    const [email,setemail]= useState(comingemail || '');

  return (
    <>
    <form>
        <input type="text" name="title" id="title" value={title} 
        onChange={(e)=>settitle(e.target.value)}/>
        <input type="email" name="email" id="email" value={email} 
        onChange={(e)=> setemail(e.target.value)}/>
        <button onClick={()=> Updatedata(id,title,email)}>Update Data</button>
    </form>
    </>
  )
}

export default Final;