import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import env from '../env'
import Post from './Post'

const Review = (props) => {
    let [post, setPost] = useState([])
    useEffect(async () => {
        let jsonData = JSON.stringify(props)
        let response = await axios.post(`${env.URL}/dipicious/api/user/`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        setPost(response.data.data)
    },[1])
    let isLiked = true
    return (
       <Post post={post}/>
    )
}
export default Review