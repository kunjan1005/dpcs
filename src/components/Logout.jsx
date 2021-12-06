import React from 'react'
import {useNavigate} from 'react-router-dom'
const Logout=()=>{
     let navigate=useNavigate() 
     localStorage.removeItem('token')
     navigate('/login')
    return '' 
}
export default Logout