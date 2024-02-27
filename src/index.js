import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
//external css--
//function PrintName(){
    //return <h1>Hello React Js</h1>;
//}
const root = ReactDOM.createRoot(document.getElementById('root'));
/*setInterval(()=>{
    root.render(<App/>);
}, 1000);*/
root.render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>
);
