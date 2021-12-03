import React, { useEffect, useState } from "react";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostData, like, dislike } from '../actions/index'
import { Tooltip } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Post = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let [posts, setPosts] = useState([])
    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostData())
        setPosts(state.post)
    }, [])
    // let isliked==1 in state.likes.id ?false :true;
    let isliked = true
    return (
        posts.map((post, index) => {
            return <div className="card m-auto mt-2" >
                <div className="col-md-12 pt-1 pb-1" style={{ borderBottom: '1px solid whitesmoke' }}>
                    <div style={{
                        width: '6rem',
                        paddingRight: "1rem",
                        textAlign: 'right',
                        color: "whitesmoke",
                        borderRadius: "0 1rem 1rem 0",
                        backgroundColor: 'palevioletred'
                    }}><b>Dip in</b></div>
                </div>

                <div className="card-body">

                    <NavLink to={`/restaurant/${post.title}`} style={{ color: 'palevioletred' }}>
                        <h6 className="card-title">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.DehJRV6LJqhu0gx-3lSd4AHaHa&pid=Api&P=0&w=300&h=300' className='profile_pick' />Depecious <span className='post_side_title' style={{ color: "black" }}>Dipped in <span style={{ color: "orange" }}>@helo</span></span>
                        </h6>
                    </NavLink>

                    <p style={{ float: "right" }}>{post.visit}</p>

                </div>
                <Slider {...settings} >

                    <div  className="wdt">
                        <img  className="card-img-top" src={post.picture}  />
                    </div>
                    <div className="wdt">
                        <img  className="card-img-top" src={post.picture}  />
                    </div>
                    <div className="wdt">
                        <img   className="card-img-top" src={post.picture}  />
                    </div >
                    <div className="wdt">
                        <img  className="card-img-top" src={post.picture}  />
                    </div>
                    <div className="wdt">
                        <img  className="card-img-top" src={post.picture}  />
                    </div>

                </Slider>
                {/* <img className="card-img-top" src={post.picture} alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.discription}</p>
                    <span>{state.likes.like} likes</span>
                    <span className='post-icons'>
                        {isliked ? <Tooltip title='like'>
                            <LikeIcon className='post-icon' style={{ color: "palevioletred"}} onClick={() => { dispatch(like(index, index + 1)) }} />
                        </Tooltip> : <Tooltip title='dislike'>
                            <LikeIcon className='post-icon' style={{ color: "palevioletred"}} onClick={() => { dispatch(dislike(index)) }} />
                        </Tooltip>}

                        <NavLink to={`/restaurant/${post.title}`} style={{color:"black"}}><Comment className='post-icon' /></NavLink>
                    </span>
                </div>
            </div>


        })


    )
}
export default Post