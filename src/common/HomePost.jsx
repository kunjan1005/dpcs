import React,{useEffect} from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'
import { useState } from 'react'
const PersonalPost=()=>{
    let [post,setPost]=useState([])
    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })
    useEffect(()=>state.post.personal,[1])  
        //this is useffect each an every time when we change state then it will get personal post
    return <Post post={state.post.personal}></Post>
}
export default PersonalPost
