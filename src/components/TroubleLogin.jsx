import React, { useState } from "react";
import Exit from '@material-ui/icons/Clear'
import FaceBook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import FacebookLogin from 'react-facebook-login';
import Button from '@material-ui/core/Button'
import { NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'


const TroubleLogin = () => {
    let [formData, setFormData] = useState({
        username: "",
        lang: "",
        password: "",
        device_token: "",
        register_id: "",
        device_type: ""
    })
    const [cookies, setCookie] = useCookies(['userToken']);
    const whileFillUpForm = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })

    }
    const loggingIn = async (e) => {
        e.preventDefault()
        let response = await axios.post(`https://www.dipicious.com/dipicious/api/user/login`, {
            'Authorization': 'Basic ' + btoa(`${formData.username}:${formData.password}`)
        }, JSON.stringify({ ...formData }))
        console.log(response)
        setCookie('token', 'Basic' + btoa(`${formData.username}:${formData.password}`))

    }

    let navigate = useNavigate()
    const responseFacebook = () => {

    }
    return (
        <div className='container-fluid user_container'>
            <div className="card m-auto " style={{ height: "38rem", padding: "1rem" }}>
                <img src="https://tse2.mm.bing.net/th?id=OIP.iXgfnR6m1gF15E25778qngHaHa&pid=Api&P=0&w=300&h=300"
                    className='login_card_img' id='profile_img'
                    style={{ width: "6rem", height: '4rem', margin: 'auto' }}
                    alt="" />
                <h4 className='m-auto login-title' style={{color:'black'}}>Trouble Logging in?</h4><br/>
                <h4 className='m-auto login-title'>Enter your email,phone or username and we'll send you a link to get back into your account</h4>

                <div className="card-body p-2">

                    <form >
                        <div className='row'>
                            <div className='row'>

                            </div>
                            <div className='col-md-12'>

                                <div className="mb-2">
                                    <select name="language" id="" className="form-control" onChange={whileFillUpForm}>
                                        <option value='' selected disabled>Select Language</option>
                                        <option value='english'>English</option>
                                        <option value='arabice'>Arabic</option>
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control"
                                        id="" name='username' placeholder='Mobile Number or email'
                                        onChange={whileFillUpForm} />
                                </div>
                            </div>
                        

                        </div>
                    
                        <button type="submit" className="btn btn-danger login_btn">Send Login Link</button>
                        <span className='row mt-3' style={{ lineHeight: '0.1rem' }}><hr className='col-lg-5' /><span className='col-lg-2' >OR</span><hr className='col-lg-5' /></span>
                        <h4 className='m-auto login-title' style={{color:'black'}}>Create New Account</h4><br/>
                    </form>

                </div>
            </div>
            <div className='card m-auto'>
                <div className='m-auto p-3'>

                    <span className='policy_paragraph'><b><NavLink to='/login' className='links' id=''>Back To Login</NavLink></b></span><br />

                </div>
            </div>
          

        </div>
    )
}
export default TroubleLogin