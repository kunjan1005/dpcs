import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Activity from "../common/Activity";
import Favorite from "../common/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { userActivity, userFavorites, userfeedback, userPoints } from "../actions";
import Review from "../common/Review";
import Point from "./Points";
import _ from "underscore";
import Shimmer from "react-js-loading-shimmer";

const ProfileTabContainer = ({other_user_id}) => {
    let state = useSelector((state) => state.profileTabReducer)
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(userActivity(other_user_id))
        dispatch(userFavorites(other_user_id))
        dispatch(userfeedback(other_user_id))
        dispatch(userPoints(other_user_id))
    }, [0])
    return (
        <div className='col-lg-8 col-12 m-auto profile_post_container'>
            <hr />
            <div className="row m-auto">
                <div className='col-md-3 col-3'><NavLink to='#activities' className='links'><b>{_.isEmpty(state.activity)?<Shimmer/>:state.activity.total}</b><h5>ACTIVITIES</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#favriate' className='links'><b>{_.isEmpty(state.favoriate)?<Shimmer/>:state.favoriate.total} </b><h5>FAVORITE</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#reviews' className='links'><b>{_.isEmpty(state.reviews)?<Shimmer/>:state.reviews.total} </b><h5>REVIEWS</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#points' className='links'><b>{_.isEmpty(state.points)?<Shimmer/>:state.points.total}</b><h5>POINTS</h5></NavLink></div>
            </div>
            <hr />
            <div className='row post_container'>
                {tabindex == 'activities' ? <Activity data={state.activity.item} /> : ""}
                {tabindex == 'favriate' ? <Favorite data={state.favoriate.item} /> : ""}
                {tabindex == 'reviews' ? <Review data={state.reviews.item} /> : ""}
                {tabindex == 'points' ? <Point data={state.points.item} /> : ""}




            </div>


        </div>
    )
}


export default ProfileTabContainer