import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fatchData, personaData, setSinglePost } from "../actions";
import { isUserLoging } from "../authorization/useAuth";
import _ from 'underscore'
import PostTab from "../common/PostTab";
import Loading from '../common/Loading'


const Home = () => {
    let [post, setPost] = useState([])
    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(async () => {
        let { login } = isUserLoging()
        if (!login) {
            return navigate('/login')
        }
        dispatch(fatchData())
        setPost(state.post);
    }, [1])
    return (
        <>
            <PostTab />
            <Post post={state.post} />
        </>
    )
}
export default Home