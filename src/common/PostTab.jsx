import React, { useEffect } from 'react';
import { fatchData, personaData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { isUserLoging } from "../authorization/useAuth";
import { useNavigate } from "react-router";
import Post from './Post';


const PostTab = () => {
    let [tab, setTab] = useState(false);
    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })
    let navigate = useNavigate()
    useEffect(async () => {
        let { login } = isUserLoging()
        if (!login) {
            return navigate('/login')
        }
        dispatch(fatchData())
    }, [1])
    let dispatch = useDispatch()


    return (<>
        <div className="post-tab-container container p-3">
            <div className="row">
                <div className="col-lg-6 col-6" onClick={() => {

                    dispatch(fatchData())
                    setTab(false)
                }}>
                    <h6>GLOBAL</h6>
                </div>
                <div className="col-lg-6 col-6" onClick={() => {
                    dispatch(personaData())
                    setTab(true)
                }}>
                    <h6>PERSONAL</h6>
                </div>
            </div>
        </div>
        {tab ? <Post post={state.post.personal} /> : <Post post={state.post.global} />}
    </>)
}
export default PostTab