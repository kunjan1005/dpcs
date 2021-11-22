import React, { useState } from "react";
import Exit from '@material-ui/icons/Clear'
import FaceBook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import FacebookLogin from 'react-facebook-login';
import Button from '@material-ui/core/Button'
import { NavLink } from "react-router-dom";
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
    const whileFillUpForm = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })

    }
    const loggingIn = async (e) => {
        e.preventDefault()
        let response = axios.post(`https://www.dipicious.com/dipicious/api/user/login`, {
            'Authorization': 'Basic ' + btoa(`${formData.username}:${formData.password}`)
        }, JSON.stringify({ ...formData }))
        console.log(response)
        // if(response.status){
        //     console.log('hello')
        //     toast ("I am Tostify!")

        // }
    }

    let navigate = useNavigate()
    const responseFacebook = () => {

    }
    return (
        <div className='container-fluid user_container'>
            <div className="card m-auto " style={{ height: "max-content", padding: "2rem" }}>
                <div className='exit_button justify-content-end' ><Exit onClick={() => { navigate('/') }} /></div>
                <img src="dpcs_app/public/images/img_logo.png" className='login_card_img' alt="" />
                <h3 className='m-auto login-title'>Login Here</h3>
                <div className="card-body">
                    <form onSubmit={loggingIn}>
                        <div className="mb-2">
                            <select name="lang" id="" className="form-control" onChange={whileFillUpForm} >
                                <option value='' selected disabled>Select Language</option>
                                <option value="0">English</option>
                                <option value="1">Arabic</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control"
                                name='username'
                                placeholder='username'
                                onChange={whileFillUpForm} />
                        </div>
                        <div className="mb-2">
                            <input type="password" className="form-control"
                                name='password'
                                placeholder='password'
                                onChange={whileFillUpForm} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-danger login_btn">Login</button>
                    </form>

                    <div className='m-auto'>
                        <span className='policy_paragraph'><b><NavLink to='/forgot_password' className='links' >Forgot password?</NavLink></b></span><br />
                        <span className='policy_paragraph'><b>Create New Account?<NavLink to='/singup' className='links' >Singup</NavLink></b></span><br />

                    </div>
                    <div className='row m-auto mt-3'>
                        <span className='policy_paragraph text-center'><b>Or</b></span><br /><hr />
                        <div className='col-lg-6 col-12 mt-1'><FacebookLogin
                            appId="855305195153167"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook}
                        />
                        </div>
                        <div className='col-lg-3 col-6 mt-1'><Button color='secondary' variant="contained"><Instagram /></Button></div>
                        <div className='col-lg-3 col-6 mt-1'><Button color='primary' variant="contained"><Twitter /></Button></div>
                        <div className='col-lg-3 col-6 mt-1'><Button color='primary' variant="contained">G</Button></div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default Login