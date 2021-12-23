import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import env from '../env'
import Post from './Post'

const Review = (props) => {
    return (
       <Post post={props.data} status="1" review="1"/>
    )
}
export default Review