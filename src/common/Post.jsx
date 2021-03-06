import React, { useEffect, useState } from "react";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    like, dislike, userfeedback, postLikes,
    postComments, getReviewRestaurant, getDipinRestaurant
} from '../actions/index'
import { getSingleRestaurant } from '../actions/index'
import { Tooltip } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LocationOn } from "@material-ui/icons";
import env from "../env";
import Comments from "../custom/Commetns";
import ShareIcon from '@material-ui/icons/Share';
import view from '../images/icon/view.png'
import copy from "copy-to-clipboard";
import { toast } from 'react-toastify'
import CustomeLikeList from '../custom/CustomeLikeList'
import Shimmer from "react-js-loading-shimmer";
import _ from 'underscore'
const Post = (props) => {
    let [posts, setPosts] = useState(props.post)
    let [show, setShow] = useState(true)
    let [likes, showLikes] = useState(false)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let dispatch = useDispatch()
    return (
        <>
            {likes ? <CustomeLikeList close={showLikes} /> : ''}
            {show ? <Comments close={setShow} /> : ''}
            {_.isEmpty(posts)?<Shimmer/>:posts.map((post, index) => {
                return <><div style={{ padding: "0px" }} className={`card m-auto mt-3 mt_3 ${props.restaurant == 1 ? 'col-lg-7' : props.status == 1 ? "col-lg-12" : "col-lg-7 col-md-12"} `} key={index}>

                    <div className="col-md-12 mt-2 p-0" style={{ borderBottom: '1px solid whitesmoke' }}>
                        <span style={{
                            width: '10rem',
                            paddingRight: "1rem",
                            textAlign: 'right',
                            color: "whitesmoke",
                            borderRadius: "0 1rem 1rem 0",
                            backgroundColor: props.review == 1 ? 'lightgreen' : post.post_type == 1 ? "#d31f33" : post.post_type == 2 ? "orange" : "lightgreen",
                            padding: "5px 50px 5px 5px", display: "inline-block"
                        }}><b>{props.review == 1 ? 'Reviewed' : post.post_type == 1 ? "Dip in" : post.post_type == 2 ? "Dip out" : "Reviewed"}</b></span>

                        {props.review == 1 ? <span style={{
                            float: "right",
                            color: 'white',
                            backgroundColor: 'green',
                            width: "1.5rem"
                        }}>{_.isEmpty(post) ? <Shimmer /> : parseFloat(post.overall_rate)}</span> : ""}
                    </div>
                    <div className="card-body d-flex">
                        <h6 className="card-title">
                            <NavLink to={`/profile?user_id=${post.user_id}#activities`} style={{ color: "#d31f33" }}>
                                {_.isEmpty(post) ? <Shimmer /> : <img src={`${env.URL}/dipicious/${post.user_profile_pic}`} className='profile_pick' />} {post.name == undefined ? <Shimmer /> : post.name}
                            </NavLink>
                            <span className='post_side_title' style={{ color: "black" }}> {props.review == 1 ? 'Reviewed' : post.post_type == 1 ? "Dip in" : post.post_type == 2 ? "Dip out" : "Reviewed"}
                                {post.restaurant_name != undefined ?
                                    <NavLink to={`/restaurant/${post.restaurant_name}`} onClick={() => {
                                        localStorage.setItem('restaurant', post.restaurant_id)
                                        // dispatch(getSingleRestaurant(post.restaurant_id))
                                        // dispatch(getReviewRestaurant(post.restaurant_id))
                                        // dispatch(getDipinRestaurant(post.restaurant_id))
                                    }}>
                                        <span style={{ color: "orange" }} className="resturant_name">@{post == undefined ? <Shimmer /> : post.restaurant_name}</span>
                                    </NavLink> : ""} {post.location_name !== null ? <span>
                                        <LocationOn />{post.location_name}</span> : ''} <br />

                            </span>
                            <span className="user">{_.isEmpty(post) ? <Shimmer /> : post.description}</span>
                        </h6>
                    </div>
                    <p className="text1">{_.isEmpty(post) ? <Shimmer /> : post.time}</p>
                    <Slider {...settings} className="mt-3" >
                        {post.post_image != undefined ? post.post_image.map((img) => {

                            return <div className="wdt">
                                {img.image_url.split('.')[1] == 'mp4' ? <iframe className="card-img-top" src={`${env.URL}/dipicious/${img.image_url}`} /> : <img className="card-img-top home-img" src={`${env.URL}/dipicious/${img.image_url}`} />}

                            </div>
                        }) : <Shimmer className='card-img-top home-img' />}
                    </Slider>
                    <div className="card-body">
                        <span><b><span
                            data-toggle="modal" data-target="#myModal1"
                            style={{ cursor: 'pointer' }} onClick={() => {
                                dispatch(postLikes(post.post_id))
                                showLikes(true)
                            }}>{post.like_count}</span>{post.is_like == 1 ? <Tooltip title={props.review == 1 ? 'appriciated' : 'liked'}>
                                {props.review == 1 ? <i class="far fa-handshake post-icon" style={{ color: "palevioletred" }}
                                    onClick={() => {
                                        dispatch(dislike(post.post_id))
                                        dispatch(userfeedback())
                                    }}></i> : <LikeIcon className='post-icon' style={{ color: "palevioletred" }}
                                        onClick={() => {
                                            dispatch(dislike(post.post_id))
                                            dispatch(userfeedback())
                                        }}
                                // onClick={onappRedirect}
                                />}

                            </Tooltip> : <Tooltip title={props.review == 1 ? 'appriciate' : 'like'}>
                                {props.review == 1 ? <i class="far fa-handshake"
                                    onClick={() => {
                                        dispatch(like(post.post_id))
                                        dispatch(userfeedback())
                                    }}></i> : <LikeIcon className='post-icon'
                                        onClick={() => {
                                            dispatch(like(post.post_id))
                                            dispatch(userfeedback())
                                        }}
                                // onClick={onappRedirect}
                                />}

                            </Tooltip>}


                        </b></span>&nbsp;&nbsp;
                        <span><b>{_.isEmpty(post) ? <Shimmer /> : post.comment_count}  <Comment className='post-icon' data-toggle="modal" data-target="#myModal"
                            onClick={() => {
                                show ? setShow(false) : setShow(true)
                                dispatch(postComments(post.post_id))
                            }} /></b></span>&nbsp;&nbsp;
                        <span><b>{post.share_count} <ShareIcon onClick={() => {
                            copy(`${env.URL}/dipicious/${post.post_image[0].image_url}`);
                            toast.info('link copied')
                        }} /></b>&nbsp;&nbsp;{post.view_count!=0?<span><img src={view} style={{width:"2rem",height:"2rem"}}/>&nbsp;&nbsp;{post.view_count}</span>:null}</span>
                    </div>


                </div>

                </>

            })}

        </>
    )
}
export default Post