import React from "react";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { NavLink } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

import $ from 'jquery'

const PostPage = () => {

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

                        <NavLink to='/post/1' style={{ color: 'palevioletred' }}>
                            <h6 className="card-title">
                                <img src='https://tse1.mm.bing.net/th?id=OIP.DehJRV6LJqhu0gx-3lSd4AHaHa&pid=Api&P=0&w=300&h=300' className='profile_pick' />Depecious <span className='post_side_title' style={{ color: "black" }}>Dipped in <span style={{ color: "orange" }}>@helo</span></span>
                            </h6>
                        </NavLink>

                        <p style={{ float: "right" }}>5m</p>

                    </div>
                    <img className="card-img-top" src='https://tse2.mm.bing.net/th?id=OIP._h7s27M_cYLoJ7SzE7XRZQHaEK&pid=Api&P=0&w=284&h=160' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">title</h5>
                        <p className="card-text">discription</p>
                        <span>2 likes</span>
                        <span className='post-icons'>
                            <Tooltip title='like'>
                                <LikeIcon className='post-icon' style={{ color: "palevioletred"}} />
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
                                            <div className="align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">10</span><span className="dot ml-2"></span>
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
                                            <div className="align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">10</span><span className="dot ml-2"></span>
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