import React, { useEffect } from "react";
import Post from "../common/Post";
import Login from '../components/Login';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
    let loggin=true
    if (loggin) {
        return (
            <div className="container-fluid p-2">
                <Post />

            </div>

        )
    }
    return <Login />
    }
    export default Home