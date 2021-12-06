import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Login from "./Login";

const Home = () => {  
    let state=useSelector((state)=>state.loginReducer)
    let navigate=useNavigate()
    // console.log(state)
    // if(state.isLogin){
       if(localStorage.getItem('token')=='' || localStorage.getItem("token")==null){ 
       
       return <Login/>
    }
    return (
      
        <div className="container-fluid p-2">
            <Post />
        </div>
    )
}
export default Home