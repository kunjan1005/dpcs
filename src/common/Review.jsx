import {Repeat} from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import {isUserLoging} from '../authorization/useAuth'
import Post from './Post'

const Review = (props) => {
    let [user,setuser]=useState()
    useEffect(()=>{
    let {user}=isUserLoging()
     setuser(user.username)
    },[1])
    return (
        <>
            {props.restab!=0?<div className='row m-auto reposted'><span> <i class="fas fa-redo-alt"></i>RePost &nbsp;
            <span style={{color:'black'}}>{user}</span><span style={{color:'#d31f33'}}>@{user}</span></span> </div>:""}
            <Post post={props.data} status="1" review="1" restaurant={props.restaurant} />
        </>
    )
}
export default Review