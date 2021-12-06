import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {  
    let state=useSelector((state)=>state.loginReducer)
    let navigate=useNavigate()
    if(state.isLogin){
       navigate('/login')
       return
    }
    return (
      
        <div className="container-fluid p-2">
            <Post />
        </div>
    )
}
export default Home