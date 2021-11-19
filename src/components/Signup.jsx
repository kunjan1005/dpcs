import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { toast, toast } from 'react-toastify'
import FacebookLogin from 'react-facebook-login';
import Exit from '@material-ui/icons/Clear'
import '../js/fileuploader'
import { useNavigate } from 'react-router'
const fileUploadFunction = () => {
    const fileInput = document.getElementById('avatar-1')
    fileInput.click()
}
const uploadAndSetImg = (e) => {
    console.log(e)

}
const Singup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        language: '',
        name: '',
        username: '',
        website: '',
        description: '',
        email: '',
        mobilno: '',
        birthDate: '',
        password: "",
        confirmPassword: ''
    })
    const whileFillUpForm = (e) => {
        const name = e.target.name
        setFormData({
            ...formData, [name]: e.target.value
        })
        console.log(formData)
    }

    return (
        <>
            <div className='container-fluid user_container'>
                <div className="card m-auto " style={{ height: "38rem", padding: "1rem" }}>
                    <div className='exit_button justify-content-end' ><Exit onClick={() => { navigate('/') }} /></div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.iXgfnR6m1gF15E25778qngHaHa&pid=Api&P=0&w=300&h=300"
                        className='login_card_img' id='profile_img'
                        style={{ width: "6rem", height: '4rem', margin: 'auto' }}
                        alt="" />
                    <h4 className='m-auto login-title'>Sing up to see photos and videos from your near by resturnats</h4>
                    <div className='col-lg-12 col-12 m-auto' ><FacebookLogin
                        appId="855305195153167"
                        // autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        // callback={}
                        style={{ margin: "auto", border: '1px solid black !important' }}
                    />
                    </div>
                    <span className='row mt-3' style={{ lineHeight: '0.1rem' }}><hr className='col-lg-5' /><span className='col-lg-2' >OR</span><hr className='col-lg-5' /></span>
                    <div className="card-body p-2">

                        <form >
                            <div className='row'>
                                <div className='row'>
                                    <div className="col-sm-4 text-center m-auto">
                                        <div className="kv-avatar" onClick={fileUploadFunction}>

                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xLzLf17gMCxAddkKdchnl_gc4d7KFgHUYZi19MtA8sp4-v1RNrQzjB1ufxOX4R4-e0s&usqp=CAU" alt="" />

                                            <div className="file-loading">
                                                <input id="avatar-1" name="avatar-1" type="file" required onChange={uploadAndSetImg} />
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
                                            id="" name='mobilno' placeholder='mobile no'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <input type="password" className="form-control"
                                            name='password' placeholder='password'
                                            onChange={whileFillUpForm} />
                                    </div>
                                    <div className="mb-1">
                                        <select name="language" id="" className="form-control" onChange={whileFillUpForm}>
                                            <option value='' selected disabled>Select Language</option>
                                            <option value='english'>English</option>
                                            <option value='arabice'>Arabic</option>
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
                            <button type="submit" className="btn btn-danger login_btn">Sign up</button>
                            <span className='policy_paragraph'>By Singing up.you agree to our Terms.Data Policy and Cookies Policy</span><br />

                        </form>

                    </div>
                </div>
                <div className='card m-auto mt-3'>
                    <div className='m-auto p-3'>

                        <span className='policy_paragraph'><b> Have Account?<NavLink to='/login' className='links' id=''>Login</NavLink></b></span><br />

                    </div>
                </div>
                <div className='card m-auto mt-1' style={{border:'none'}}>
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