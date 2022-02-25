import React, { useEffect } from 'react';
import { fatchData, personaData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { isUserLoging } from "../authorization/useAuth";
import { useNavigate } from "react-router";
import PersonalPost from './HomePost';
import GlobalPost from './GlobalPost';
import {NavLink} from 'react-router-dom'
import Post from './Post';
import _ from 'underscore';


const PostTab = () => {
    let [tab, setTab] = useState(false);
    let state=useSelector(state=>state.storePostData)
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
                    <h6><NavLink to="#" style={{color: "white"}}>GLOBAL</NavLink></h6>
                </div>
                <div className="col-lg-6 col-6" onClick={() => {
                    dispatch(personaData())
                    setTab(true)
                }}>
                    <h6><NavLink to="#" style={{color: "white"}}>PERSONAL</NavLink></h6>
                </div>
            </div>
        </div>
        {!_.isUndefined(state.search)?<Post post={state.search}/>:tab ? <PersonalPost/> : <GlobalPost/>}
    
    </>)
}
export default PostTab