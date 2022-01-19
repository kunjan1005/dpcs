import React from 'react'

const Comments=(props)=>{
    return (<>
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
    </>)
}
export default Comments