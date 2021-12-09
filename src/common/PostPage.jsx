import React, { useEffect, useState } from "react";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { useParams } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import $ from 'jquery'
import axios from "axios";
import env from "../env";
import { isUserLoging } from "../authorization/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { LocationOn } from "@material-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import _ from "underscore";
import Loading from "./Loading";
$(document).ready(function () {
    $(this).on('click', '#reply', function () {
        if ($(this).text() == 'Reply') {
            $(this).next().show()
            $(this).html("<b>Hide</b>")
        } else {
            $(this).next().hide()
            $(this).html("<b>Reply</b>")
        }
    })
})

const PostPage = () => {
    let [post, setPost] = useState({})
    let dispatch = useDispatch()
    let { id } = useParams('id')
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  
    let userData = isUserLoging()
    let { user_id, access_token, lang } = userData.user

    useEffect(async () => {
        let response = await axios.post(`${env.URL}/dipicious/api/user/post_detail`, JSON.stringify({ user_id, access_token, lang, post_id: id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        if (_.isEmpty(response.data.data[0])) {
            return <h3>No Post Found</h3>
        }
        setTimeout(() => {
            setPost(response.data.data[0])
        }, 900);


    }, [1])
    // return ""
    if (_.isEmpty(post)) {
        return <Loading />
    }
    return (
        <>
            <div className='row pb-2'>
                <div className="card col-lg-8 m-auto" style={{ top: "8px" }} >
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

                        <h6 className="card-title" style={{ color: 'palevioletred' }}>
                            <img src={`${env.URL}/dipicious/${post.user_profile_pic}`} className='profile_pick' />{post.name} <span className='post_side_title' style={{ color: "black" }}>Dipped in {post.restaurant_name != null ? <span style={{ color: "orange" }}>@{post.restaurant_name}</span> : ""} {post.location_name !== null ? <span><LocationOn />{post.location_name}</span> : ''}</span>
                        </h6>


                        <p style={{ float: "right" }}>{post.time}</p>

                    </div>
                    <Slider {...settings} >
                        {post.post_image.map((img) => {

                            return <div className="wdt">
                                {img.image_url.split('.')[1] == 'mp4' ? <iframe className="card-img-top" src={`${env.URL}/dipicious/${img.image_url}`} /> : <img className="card-img-top" src={`${env.URL}/dipicious/${img.image_url}`} />}

                            </div>
                        })}
                    </Slider>
                    <div className="card-body">
                        <h5 className="card-title">{post.name}</h5>
                        <p className="card-text">{post.description}</p>
                        <span>{post.like_count} likes</span>
                        <span className='post-icons'>
                            <Tooltip title='like'>
                                <LikeIcon className='post-icon' style={{ color: "palevioletred" }} />
                            </Tooltip>

                            <Comment className='post-icon' />
                        </span>
                    </div>
                    <div className="mt-1" >

                        <div className="mt-1 mb-5">
                            <div className="d-flex justify-content-center col-12">

                                <div className="coment-bottom  p-2 px-4">
                                    <h5>Commments</h5>
                                    <div className="d-flex flex-row add-comment-section mt-3 mb-3 col-12">
                                        <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<input type="text" className="form-control mr-2" placeholder="Add comment" />&nbsp;<button className="btn btn-primary" type="button">Post</button></div>
                                    <hr />
                                    <div className="commented-section mt-2">
                                        <div className="d-flex flex-row align-items-center commented-user">
                                            <h6 className="mr-2">Corey oates</h6><span className="dot mb-1"></span><span className="mb-1 ml-2">4 hours ago</span>
                                        </div>
                                        <div className="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                        <div className="reply-section">
                                            <div className="align-items-center voting-icons"><span className="ml-2">10</span><span className="dot ml-2"></span>
                                                <span className="ml-2 mt-1" id='reply' style={{ cursor: 'pointer' }}><b>Reply</b></span>
                                                {/* <br /> */}

                                                <div className=" add-comment-section comment-reply mt-1 mb-3 row" style={{ marginLeft: "1rem", display: "none" }}>
                                                    <div classNameName='replyBack'>
                                                        <div className="d-flex flex-row add-comment-section mt-3 mb-3 offsetcol-4 col-md-12">
                                                            <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<input type="text" className="form-control mr-2" placeholder="Reply..." />&nbsp;<button className="btn btn-primary" type="button">send</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<b>user name</b>
                                                        <hr />

                                                        <div className="comment-text-sm" style={{ fontSize: '13px' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<b>user name</b>
                                                        <hr />

                                                        <div className="comment-text-sm" style={{ fontSize: '13px' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="commented-section mt-2">
                                        <div className="d-flex flex-row align-items-center commented-user">
                                            <h6 className="mr-2">Corey oates</h6><span className="dot mb-1"></span><span className="mb-1 ml-2">4 hours ago</span>
                                        </div>
                                        <div className="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                        <div className="reply-section">
                                            <div className="align-items-center voting-icons"><span className="ml-2">10</span><span className="dot ml-2"></span>
                                                <span className="ml-2 mt-1" id='reply' style={{ cursor: 'pointer' }}><b>Reply</b></span>
                                                {/* <br /> */}

                                                <div className=" add-comment-section comment-reply mt-1 mb-3 row" style={{ marginLeft: "1rem", display: "none" }}>
                                                    <div classNameName='replyBack'>
                                                        <div className="d-flex flex-row add-comment-section mt-3 mb-3 offsetcol-4 col-md-12">
                                                            <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<input type="text" className="form-control mr-2" placeholder="Reply..." />&nbsp;<button className="btn btn-primary" type="button">send</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<b>user name</b>
                                                        <hr />

                                                        <div className="comment-text-sm" style={{ fontSize: '13px' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<b>user name</b>
                                                        <hr />

                                                        <div className="comment-text-sm" style={{ fontSize: '13px' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
export default PostPage