import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/dpcs_logo.png'
import FacebookLogin from 'react-facebook-login';
import Exit from '@material-ui/icons/Clear'
import '../js/fileuploader'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import axios from 'axios'
import env from '../env'
import genrateToken from '../authorization/genrateToken';
const fileUploadFunction = () => {
    const fileInput = document.getElementById('avatar-1')
    fileInput.click()
}

const Singup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        lang: '',
        name: '',
        username: '',
        email: '',
        mobile: '',
        password: "",
        profile_pic: "",
        gender:""
    })
    let forminputData = new FormData()
    const uploadImages = (e) => {
        let image = document.getElementById('profile_img')
        image.src = URL.createObjectURL(e.target.files[0])
        const name = e.target.name
        setFormData({
            ...formData, [name]: e.target.files[0]
        })
        
    }
    const whileFillUpForm = (e) => {
        const name = e.target.name
        setFormData({
            ...formData, [name]: e.target.value
        })
    }
    const singingUp = async(e) => {
        e.preventDefault()
        if (formData.name == '') {
            toast.error('name required!')
        } else if (formData.username == '') {
            toast.error('username required!')
        } else if (formData.email == '') {
            toast.error('email required!')
        } else if (formData.mobile == '') {
            toast.error('mobile number required!')
        } else if (formData.password == '') {
            toast.error('password required!')
        }
        forminputData.append('name',formData.name)
        forminputData.append('username',formData.username)
        forminputData.append('email',formData.email)  
        forminputData.append('mobile',formData.mobile)
        forminputData.append('password',formData.password)
        forminputData.append('gender',formData.gender)
        forminputData.append('lang',formData.lang)
        forminputData.append('profile_pic',formData.profile_pic)

        
         axios.post(`${env.URL}/dipicious/api/user/register`,forminputData,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM=',
                'Content-Type':'multipart/form-data'
            }
        }).then(async(response)=>{
            if(response.data.flag==1){
                toast.success('your account created')
                let token=await genrateToken(response.data.data)
                localStorage.setItem('token',token)
                navigate('/profile')
            }
        })
    }

    return (
        <>
            <div className='container-fluid user_container'>
                <div className="card m-auto " style={{ height: "38rem", padding: "1rem" }}>
                    
                    <img src={logo}
                        className='login_card_img'
                        style={{ width: "7.5rem", height: '3rem', margin: 'auto' }}
                        alt="" />
                    <h6 className='m-auto w-10 text-center'>Sing up to see photos and videos from your near by resturnats</h6>
            
                    
                    <span className='row mt-3' style={{ lineHeight: '0.1rem' }}><hr className='col-lg-4 col-4' /><span className='col-lg-2 col-2' >OR</span><hr className='col-lg-4 col-4' /></span>
                    <div className="card-body p-2">

                        <form onSubmit={singingUp}>
                            <div className='row'>
                                <div className='m-auto'>
                                    <div className="col-sm-7 text-center m-auto">
                                        <div className="kv-avatar" onClick={fileUploadFunction}>

                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xLzLf17gMCxAddkKdchnl_gc4d7KFgHUYZi19MtA8sp4-v1RNrQzjB1ufxOX4R4-e0s&usqp=CAU" id='profile_img' alt="" />

                                            <div className="file-loading">
                                                <input id="avatar-1" name="profile_pic" type="file" onChange={uploadImages} multiple/>
                                            </div>
                                        </div>

                                        <div className="kv-avatar-hint">
                                            <small>Select file  1500 KB</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>


                                    <div className="mb-1">
                                        <input type="text" className="form-control"
                                            id="" name='name' placeholder='Name'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <input type="text" className="form-control"
                                            id="" name='username' placeholder='user name'
                                            onChange={whileFillUpForm} />
                                    </div>
                                </div>
                                <div className='col-md-12'>

                                    <div className="mb-1">
                                        <input type="text" className="form-control"
                                            id="" name='email' placeholder='email'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <input type="text" className="form-control"
                                            id="" name='mobile' placeholder='mobile no'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <input type="password" className="form-control"
                                            name='password' placeholder='password'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <select name="lang" id="" className="form-control" onChange={whileFillUpForm}>
                                            <option value='' selected disabled>Select Language</option>
                                            <option value='0'>English</option>
                                            <option value='1'>Arabic</option>
                                        </select>
                                    </div>
                                    <div className="mb-1">
                                        <select name="gender" id="" className="form-control" onChange={whileFillUpForm}>
                                            <option value='' selected disabled>Select Gender</option>
                                            <option value='0'>Male</option>
                                            <option value='1'>Female</option>
                                            <option value='2'>Other</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-1 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-danger login_btn m-auto mt-3">Sign up</button>
                            <span className='policy_paragraph'>By Singing up.you agree to our Terms.Data Policy and Cookies Policy</span><br />

                        </form>

                    </div>
                </div>
                <div className='card m-auto mt-3'>
                    <div className='m-auto p-3'>

                        <span className='policy_paragraph'><b> Have Account?<NavLink to='/login' className='links' id=''>Login</NavLink></b></span><br />

                    </div>
                </div>
                <div className='card m-auto mt-1' style={{ border: 'none' }}>
                    <div className='m-auto'>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.hehIrUW0uy5YbWbJF9sviAHaB-&pid=Api&P=0&w=570&h=153"
                            className='col-lg-12' alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Singup