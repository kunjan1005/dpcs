import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fatchData } from "../actions";
import { isUserLoging } from "../authorization/useAuth";
import axios from "axios";
import env from "../env";

const Home = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    // let post=useSelector((state)=>state.storePostData)
    useEffect(async () => {
        let { login } = isUserLoging()
        if (login) {
            dispatch(fatchData())

        } else {
            navigate('/login')
        }
        return ()=>{
            
        }
    }, [1])

    return (

        <div className="container-fluid p-2">
            <Post />
        </div>
    )
}
export default Home