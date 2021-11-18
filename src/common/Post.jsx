import React, { useEffect, useState } from "react";
import LikeIcon from '@material-ui/icons/FavoriteBorderRounded'
import Comment from '@material-ui/icons/MessageOutlined'
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {getPostData,like,dislike} from '../actions/index'
import { Tooltip } from "@material-ui/core";

const Post = () => {
    let [posts,setPosts]=useState([])
    let state=useSelector((state)=>{
        return {post:state.storePostData,likes:state.likeDislike}
    })

    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPostData())
        setPosts(state.post)
    },[])
    let isliked=1 in state.likes.id ?false :true;
    return (
        posts.map((post)=>{
            return  <div className="card m-auto" >
                  <div style={{
                             width:'4rem',
                             paddingRight:"1rem",
                             textAlign:'right',
                             borderRadius:"0 1rem 1rem 0",
                             backgroundColor:'lightgreen'}}><b>Dip</b></div>
            <div className="card-body">
              
            <NavLink to='/post/1'>
                <h6 className="card-title">
                    <img src='https://tse1.mm.bing.net/th?id=OIP.quWoktJ7LaFdlCyPWtHrhAHaK-&pid=Api&P=0&w=300&h=300' className='profile_pick' />Barot kunjan <span className='post_side_title'>@helo</span>
                    </h6>
            </NavLink>
                <hr />
                <p className="" style={{ float: "left" }}>{post.overview}</p>
                <p style={{ float: "right" }}>{post.visit}</p>
  
            </div>
            <img className="card-img-top" src={post.picture} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.discription}</p>
                <span>{state.likes.count} likes</span>
                <span className='post-icons'>
                    {isliked?  <Tooltip title='like'>
                      <LikeIcon className='post-icon' onClick={()=>{dispatch(like(1))}}/>
                   </Tooltip>: <Tooltip title='dislike'>
                      <LikeIcon className='post-icon' style={{color:"red"}} onClick={()=>{dispatch(dislike(1))}}/>
                   </Tooltip>}
                   
                    <NavLink to='/post/1'><Comment className='post-icon' /></NavLink>
                </span>
            </div>
        </div>
         
        
        })
     

    )
}
export default Post