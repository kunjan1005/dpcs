import React, { useEffect } from "react";
import Post from "../common/Post";
import Login from '../components/Login';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
        return (
            <div className="container-fliud p-2">
                <Post />
            </div>
        )
}
export default Home