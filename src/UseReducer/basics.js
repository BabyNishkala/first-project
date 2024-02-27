import React, {useReducer} from "react";
const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const person = state.data.filter((eachperson)=>{
            return eachperson.id !== action.payload;
        });
return{
    ...state,
    data: person,
    length: state.length-1,
};
    }
};

 const Final =()=>{
    const intialstate =  {
        data: [
            {id:'1',firstname:'baby',email:'baby@gmail.com'},
            {id:'2',firstname:'nishkala',email:'nishkala@gmail.com'},
        ],
        length: 2,
    };
    const [state,dispatch]=useReducer(reducer,intialstate);
    const handle=(id)=>{
        dispatch({
            type:'DELETE_PERSON',
            payload:id
        })
    };
    return (
    <div>
        <h1>Current users:{state.length}</h1>
        {state.data.map((eachitem)=>{
                const{id,email,firstname}= eachitem
                return<div key={id}>
                    <h3>{firstname}</h3>
                    <p>{email}</p>
                    <button onClick={handle}>Delete</button>
                    </div>
            })
        }
    </div>)
 }
 export default Final;