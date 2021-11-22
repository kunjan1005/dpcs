import React, { useEffect } from "react";
import Post from "../common/Post";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useSelector,useDispatch} from 'react-redux'


const Home=()=>{

    return(
        <div className="container-fluid p-2">

              <Post/>
      
        </div>
    
    )
}
export default Home