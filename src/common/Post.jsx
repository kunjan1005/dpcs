import React from "react";
import LikeIcon from '@material-ui/icons/FavoriteBorderRounded'
import Comment from '@material-ui/icons/MessageOutlined'

const Post = () => {
    return (
        <div className="card m-auto" >
            <div className="card-body">
                <h6 className="card-title">
                    <img src='https://tse1.mm.bing.net/th?id=OIP.quWoktJ7LaFdlCyPWtHrhAHaK-&pid=Api&P=0&w=300&h=300' className='profile_pick'/>Barot kunjan <span className='post_side_title'>@helo</span></h6>
                    <hr/>
                <p className="" style={{ float: "left" }}>fhjfkhdfkjdfh</p>
                <p style={{ float: "right" }}>5m</p>

            </div>
            <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.0M93xFE7qiNcVpBIFJTgiQHaE8&pid=Api&P=0&w=291&h=195" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <span className='post-icons'>
                     <LikeIcon className='post-icon'/>
                     <Comment className='post-icon'/>
                 </span>
            </div>
        </div>
    )
}
export default Post