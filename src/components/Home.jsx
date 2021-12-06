import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import login from '../actions'

const Home = () => {  
    return (
        <div className="container-fluid p-2">
            <Post />
        </div>
    )
}
export default Home