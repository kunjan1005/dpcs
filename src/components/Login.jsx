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


const Login = () => {
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
        let response = await axios.post(`user/login`, {
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
                <h4 className='m-auto login-title'>Sing up to see photos and videos from your near by resturnats</h4>

                <div className="card-body p-2">

                    <form onSubmit={loggingIn}>
                        <div className='row'>
                            <div className='row'>

                            </div>
                            <div className='col-md-12'>

                                <div className="mb-1">
                                    <select name="language" id="" className="form-control" onChange={whileFillUpForm}>
                                        <option value='' selected disabled>Select Language</option>
                                        <option value='english'>English</option>
                                        <option value='arabice'>Arabic</option>
                                    </select>
                                </div>



                                <div className="mb-1">
                                    <input type="text" className="form-control"
                                        id="" name='username' placeholder='username'
                                        onChange={whileFillUpForm} />
                                </div>
                            </div>
                            <div className='col-md-12'>


                                <div className="mb-1">
                                    <input type="password" className="form-control"
                                        name='password' placeholder='password'
                                        onChange={whileFillUpForm} />
                                </div>


                            </div>

                        </div>
                        <div className="mb-1 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-danger login_btn">Login</button>
                        <span className='policy_paragraph'><b><NavLink to='/fotgot_password' className='links' id=''>forgot passwword?</NavLink></b></span><br />
                        <span className='policy_paragraph'>By Singing up.you agree to our Terms.Data Policy and Cookies Policy</span><br />

                    </form>

                </div>
            </div>
            <div className='card m-auto mt-3'>
                <div className='m-auto p-3'>

                    <span className='policy_paragraph'><b> Create New Account?<NavLink to='/singup' className='links' id=''>Signup</NavLink></b></span><br />

                </div>
            </div>
            <div className='card m-auto mt-1' style={{ border: 'none' }}>
                <div className='m-auto'>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.hehIrUW0uy5YbWbJF9sviAHaB-&pid=Api&P=0&w=570&h=153"
                        className='col-lg-12' alt="" />

                </div>
            </div>
        </div>
    )
}
export default Login