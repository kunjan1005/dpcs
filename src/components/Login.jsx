import React, { useState, useEffect } from "react";
import logo from '../images/dpcs_logo.png'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import genrateToken from "../authorization/genrateToken";
import { useAuth0 } from '@auth0/auth0-react';



const Login = () => {
    const { loginWithRedirect } = useAuth0();
    let navigate = useNavigate()
    let [formData, setFormData] = useState({
        username: "",
        language: "",
        password: "",
        device_token: "",
        register_id: "",
        device_type: "",
        rememberMe: false
    })
    const whileFillUpForm = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })

    }
    const loggingIn = async (e) => {
        e.preventDefault()
        var alphaExp = /^[a-zA-Z]+$/;
        if (formData.lang == '') {
            return toast.error('select langauge!')
        } else if (formData.username == '') {
            return toast.error('username required!')
        } else if (formData.password.match(alphaExp)) {
            return toast.error('username contains only character!')
        }
        let response = await axios.post(`${env.URL}/dipicious/api/user/login`, JSON.stringify({ ...formData }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        console.log(response)
        if (response.data.flag !== 0) {
            let token = await genrateToken(response.data.data)
            localStorage.setItem('token', token)
            toast.success('you are loggin...')
            
            navigate('/')
        } else {
            toast('Username and Password are incorrect')
        }
    }
    return (
        <div className='container-fluid user_container'>
            <div className="card m-auto " style={{ height: "38rem", padding: "1rem" }}>
                <img src={logo}
                    className='login_card_img' id='profile_img'
                    style={{ width: "7.5rem", height: '3rem', margin: 'auto' }}
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
                                        <option defaultValue='false ' selected disabled>Select Language</option>
                                        <option value='0'>English</option>
                                        <option value='1'>Arabic</option>
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
                            <input type="checkbox" name='rememberMe' onChange={whileFillUpForm} value='true' className="form-check-input" id="exampleCheck1" />
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
                        className='col-lg-12 col-12' alt="" />

                </div>
            </div>

        </div>
    )
}
export default Login