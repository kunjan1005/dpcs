import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'
const GlobalPost=()=>{
    let state = useSelector((state) => {
        return { post: state.storePostData, likes: state.likeDislike }
    })
    return <Post post={state.post.global}></Post>
}
export default GlobalPost
