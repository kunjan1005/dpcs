import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import env from '../env'
import Post from './Post'
// import 

const Activity = (props) => {
    let [post, setPost] = useState([])
    useEffect(async () => {
        let jsonData = JSON.stringify(props)
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_activity_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        setPost(response.data.data)
    },[1])
    return (
       <Post post={post} status="1"/>
    )
}
export default Activity