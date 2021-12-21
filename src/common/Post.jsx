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
  useEffect(()=>{setPosts(props.post)},[1])
    let dispatch = useDispatch()
    let isliked = true
    return (
  
        posts.map((post, index) => {
            return <div className="card m-auto mt-2 col-lg-7" >
                <div className="col-md-12 pt-1 pb-1" style={{ borderBottom: '1px solid whitesmoke' }}>
                    <div style={{
                        width: '6rem',
                        paddingRight: "1rem",
                        textAlign: 'right',
                        color: "whitesmoke",
                        borderRadius: "0 1rem 1rem 0",
                        backgroundColor: '#d31f33'
                    }}><b>Dip in</b></div>
                </div>

                <div className="card-body">

                
                        <h6 className="card-title">
                       <NavLink to='/profile' style={{color:"#d31f33"}}><img src={`${env.URL}/dipicious/${post.user_profile_pic}`} className='profile_pick' />{post.name}</NavLink><span className='post_side_title' style={{ color: "black" }}>Dipped in {post.restaurant_name != null ? <NavLink to={`/restaurant/${post.restaurant_id}`}><span style={{ color: "orange" }}>@{post.restaurant_name}</span></NavLink> : ""} {post.location_name !== null ? <span><LocationOn />{post.location_name}</span> : ''} <br />
                                <span>{post.description}</span></span>
                        </h6>          

                    <p style={{ float: "right" }}>{post.time}</p>

                </div>
                <Slider {...settings} >
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
                        {isliked ? <Tooltip title='like'>

                            <LikeIcon className='post-icon' style={{ color: "palevioletred" }} onClick={() => { dispatch(like(index, index + 1)) }} />
                        </Tooltip> : <Tooltip title='dislike'>
                            <LikeIcon className='post-icon' style={{ color: "palevioletred" }} onClick={() => { dispatch(dislike(index)) }} />
                        </Tooltip>}

                        <NavLink to={`/restaurant/${post.title}`} style={{ color: "black" }}><Comment className='post-icon' /></NavLink>
                    </span>
                </div>
            </div>

        })
    )
}
export default Post