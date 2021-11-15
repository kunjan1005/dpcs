import React from "react";
import Post from "../common/Post";
import PerfectScrollbar from 'react-perfect-scrollbar'
const Home=()=>{
    return(
        <div className="container-fluid">
            <PerfectScrollbar>
              <Post/>
            </PerfectScrollbar>
        </div>
    
    )
}
export default Home