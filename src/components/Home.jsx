import React, { useEffect } from "react";
import Post from "../common/Post";
import Login from  '../components/Login';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useSelector,useDispatch} from 'react-redux'


const Home=()=>{
    if(~loggin){
        return <Login/>
    }
    return(
        <div className="container-fluid p-2">
              <Post/>
      
        </div>
    
    )
}
export default Home