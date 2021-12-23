import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import env from '../env'
import Post from './Post'
// import 

const Activity = (props) => {
    return (
       <Post post={props.data} status="1"/>
    )
}
export default Activity