import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import _ from 'underscore'
import Login from "./Login";
import axios from 'axios'
import env from '../env'
import { isUserLoging } from "../authorization/useAuth";
import Activity from "../common/Activity";
import Favriate from "../common/Favraite";
import { useDispatch, useSelector} from "react-redux";
import { userActivity, userFavorites,userfeedback } from "../actions";
const ProfileTabContainer = () => {
    let state=useSelector((state)=>state.profileTabReducer)
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch=useDispatch()
    useEffect(() => {
        dispatch(userActivity())
        dispatch(userFavorites())
        dispatch(userfeedback())
    }, [0])
    return (
        <div className='col-lg-8 col-sm-12 m-auto profile_post_container'>
            <hr />
            <div className="row m-auto">
                <div className='col-md-3 col-3'><NavLink to='#activities' className='links'><b>{state.activity.total}</b><h5>ACTIVITIES</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#favriate' className='links'><b>{state.favoriate.total} </b><h5>FAVRIATE</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#reviews' className='links'><b>26 </b><h5>REVIEWS</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#points' className='links'><b>126 </b><h5>POINTS</h5></NavLink></div>
            </div>
            <div className='row post_container'>
                {tabindex == 'activities' ? <Activity data={state.activity.item} status={1}/> : ""}
                {tabindex == 'favriate' ? <Favriate data={state.favoriate.item}/> : ""}
                {tabindex == 'reviews' ? "" : ""}
                {tabindex == 'points' ? "" : ""}




            </div>


        </div>
    )
}


export default ProfileTabContainer