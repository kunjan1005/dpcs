import React, { useEffect, useState } from "react";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostData, like, dislike, fatchData } from '../actions/index'
import { Tooltip } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LocationOn } from "@material-ui/icons";
import env from "../env";


const Post = (props) => {

    let [posts, setPosts] = useState([])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => { setPosts(props.post) }, [2])


    let dispatch = useDispatch()
    return (

        posts.map((post, index) => {
            return <div  style={{padding:"0px"}}className={`card m-auto mt-3 ${props.restaurant==1? 'col-lg-7':props.status == 1? "col-lg-12" : "col-lg-7 col-md-12"} `} key={index}>

                <div className="col-md-12 mt-2 p-0" style={{ borderBottom: '1px solid whitesmoke' }}>
                    <span style={{
                        width: '10rem',
                        paddingRight: "1rem",
                        textAlign: 'right',
                        color: "whitesmoke",
                        borderRadius: "0 1rem 1rem 0",
                        backgroundColor: props.review == 1 ? 'lightgreen' : "#d31f33",
                        padding: "5px 50px 5px 5px", display: "inline-block"
                    }}><b>{props.review == 1 ? 'Reviewed' : 'Dip in'}</b></span>

                    {props.review == 1 ? <span style={{
                        float: "right",
                        color: 'white',
                        backgroundColor: 'green',
                        width: "1.5rem"
                    }}>{post.feedback}</span> : ""}
                </div>

                <div className="card-body d-flex">


                    <h6 className="card-title">
                        <NavLink to='/profile#activities' style={{ color: "#d31f33" }}>
                            <img src={`${env.URL}/dipicious/${post.user_profile_pic}`} className='profile_pick' />{post.name}
                        </NavLink>
                        <span className='post_side_title' style={{ color: "black" }}> {props.review == 1 ? 'Reviewed' : 'Dip in'} {post.restaurant_name != null ?
                            <NavLink to={`/restaurant/${post.restaurant_id}`}>
                                <span style={{ color: "orange" }} className="resturant_name">@{post.restaurant_name}</span>
                            </NavLink> : ""} {post.location_name !== null ? <span>
                                <LocationOn />{post.location_name}</span> : ''} <br />
                            <span className="user">{post.description}</span>
                        </span>
                    </h6>

                </div>
                <p className="text1">{post.time}</p>
                <Slider {...settings} className="mt-3" >
                    {post.post_image.map((img) => {

                        return <div className="wdt">
                            {img.image_url.split('.')[1] == 'mp4' ? <iframe className="card-img-top" src={`${env.URL}/dipicious/${img.image_url}`} /> : <img className="card-img-top home-img" src={`${env.URL}/dipicious/${img.image_url}`} />}

                        </div>
                    })}
                </Slider>
                {/* <img className="card-img-top" src={post.picture} alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.discription}</p>
                    <span><b>{post.like_count} likes</b></span>&nbsp;&nbsp;
                    <span><b>{post.comment_count} comments</b></span>&nbsp;&nbsp;
                    <span><b>{post.share_count} share</b></span>
                    <span className='post-icons'>
                        {post.is_like==1? <Tooltip title='liked'>

                            <LikeIcon className='post-icon' style={{ color: "palevioletred" }} onClick={() => { dispatch(dislike(post.post_id)) }} />
                        </Tooltip> : <Tooltip title='like'>
                            <LikeIcon className='post-icon' onClick={() => { dispatch(like(post.post_id)) }} />
                        </Tooltip>}

                        <NavLink to={`/restaurant/${post.title}`} style={{ color: "black" }}><Comment className='post-icon' /></NavLink>
                    </span>
                </div>
            </div>

        })
    )
}
export default Post