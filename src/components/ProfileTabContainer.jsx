import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Activity from "../common/Activity";
import Favorite from "../common/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { userActivity, userFavorites, userfeedback, userPoints,storeOtherUserProfile, 
         storeUserProfile,userRecipi } from "../actions";
import Review from "../common/Review";
import Point from "./Points";
import _ from "underscore";
import Shimmer from "react-js-loading-shimmer";
import ChefRecipi from "./ChefRecipi";

const ProfileTabContainer = ({other_user_id}) => {
    let {profileTabReducer,userReducer,recipiReducer} = useSelector((state) => {
       return {profileTabReducer:state.profileTabReducer,
        userReducer:state.userReducer,
        recipiReducer:state.recipiReducer}
    })
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    useEffect(() =>{ 
     
        dispatch(userActivity(other_user_id))
        dispatch(userFavorites(other_user_id))
        dispatch(userfeedback(other_user_id))
        dispatch(userPoints(other_user_id))
        dispatch(userRecipi(other_user_id))
        dispatch(storeOtherUserProfile(other_user_id))
        // dispatch(storeUserProfile())
    },[0])
    return (
        <div className='col-lg-8 col-12 m-auto profile_post_container'>
            <hr />
            <div className="row m-auto">
                <div className='col-md-3 col-3'><NavLink to='#activities' className='links'><b>{_.isEmpty(profileTabReducer.activity)?<Shimmer/>:profileTabReducer.activity.total}</b><h5>ACTIVITIES</h5></NavLink></div>
                <div className={userReducer.data.is_chef==1?'col-md-2 col-2':"col-md-3 col-3"}><NavLink to='#favriate' className='links'><b>{_.isEmpty(profileTabReducer.favoriate)?<Shimmer/>:profileTabReducer.favoriate.total} </b><h5>FAVORITE</h5></NavLink></div>
                <div className={userReducer.data.is_chef==1?'col-md-2 col-2':"col-md-3 col-3"}><NavLink to='#reviews' className='links'><b>{_.isEmpty(profileTabReducer.reviews)?<Shimmer/>:profileTabReducer.reviews.total} </b><h5>REVIEWS</h5></NavLink></div>
                <div className='col-md-3 col-3'><NavLink to='#points' className='links'><b>{_.isEmpty(profileTabReducer.points)?<Shimmer/>:profileTabReducer.points.total}</b><h5>POINTS</h5></NavLink></div>
                {userReducer.data.is_chef==1?<div className={userReducer.data.is_chef==1?'col-md-2 col-2':"col-md-3 col-3"}><NavLink to='#recipes' className='links'><b>{_.isEmpty(profileTabReducer.reviews)?<Shimmer/>:profileTabReducer.reviews.total} </b><h5>RECIPES</h5></NavLink></div>:""}

            </div>
            <hr />
            <div className='row post_container'>
                {tabindex == 'activities' ? <Activity data={profileTabReducer.activity.item} /> : ""}
                {tabindex == 'favriate' ? <Favorite data={profileTabReducer.favoriate.item} /> : ""}
                {tabindex == 'reviews' ? <Review data={profileTabReducer.reviews.item} /> : ""}
                {tabindex == 'points' ? <Point data={profileTabReducer.points.item} /> : ""}
                {tabindex == 'recipes' ? <ChefRecipi data={recipiReducer.list} /> : ""}
            </div>
        </div>
    )
}
export default ProfileTabContainer