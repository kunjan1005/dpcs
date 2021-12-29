
import React, { useState } from 'react'
import Post from './Post'
import Loading from './Loading'
import _ from 'underscore'
// import 

const Activity = (props) => {
    let [post,setPost]=useState([])
    setTimeout(()=>{
    setPost(props.data)
    },1000)
    if(_.isEmpty(props.data)){
      return <Loading/>
    }
    return (
       <Post post={props.data} status="1"/>
    )
}
export default Activity