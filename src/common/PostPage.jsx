import React from "react";
import LikeIcon from '@material-ui/icons/FavoriteBorderRounded'
import Comment from '@material-ui/icons/MessageOutlined'
import $ from 'jquery'

const PostPage = () => {
    
        $(document).ready(function(){
             $(this).on('click','#reply',function(){
                if ($(this).text() == 'Reply') {
                    $(this).next().show()
                    $(this).html("<b>Hide</b>")
                }else{
                    $(this).next().hide()
                    $(this).html("<b>Reply</b>")
                }
             })
            })
    return (
        <>
            <div className='row'>
                <div className="card col-md-6 col-12 order-1" >
                    <div className="card-body">
                        <h6 className="card-title">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.quWoktJ7LaFdlCyPWtHrhAHaK-&pid=Api&P=0&w=200&h=200' className='profile_pick' />Barot kunjan <span className='post_side_title'>@helo</span></h6>
                        <hr />
                        <p className="" style={{ float: "left" }}>fhjfkhdfkjdfh</p>
                        <p style={{ float: "right" }}>5m</p>

                    </div>
                    <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.0M93xFE7qiNcVpBIFJTgiQHaE8&pid=Api&P=0&w=291&h=195" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className='post-icons'>
                            <LikeIcon className='post-icon' />
                            <Comment className='post-icon' />
                        </span>
                    </div>
                </div>


                <div className=" col-md-5 col-12 m-auto order-2 mt-3" >
                    <div className="container mt-1 mb-5">
                        <div className="d-flex justify-content-center row col-12">
                            {/* <div className="d-flex flex-column col-md-8">
                                <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                                    <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1" /></div>

                            </div> */}
                            <div className="coment-bottom bg-white p-2 px-4">
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
                                          <span className="ml-2 mt-1" id='reply' style={{cursor:'pointer'}}><b>Reply</b></span>
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
                                          <span className="ml-2 mt-1" id='reply' style={{cursor:'pointer'}}><b>Reply</b></span>
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


        </>
    )
}
export default PostPage