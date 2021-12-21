import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fatchData } from "../actions";
import { isUserLoging } from "../authorization/useAuth";
import _ from 'underscore'
import Loading from '../common/Loading'


const Home = () => {

    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(async () => {
            dispatch(fatchData())
        return ()=>{
            
        }
    }, [1])
    if (_.isEmpty(state.post)) {
        return <Loading />
    }

    return (

        <div className="container-fluid p-2">
           
            <Post post={state.post} />
        </div>
    )
}
export default Home