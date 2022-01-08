import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import axios from 'axios'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete';
import { isUserLoging } from '../authorization/useAuth'
import _ from 'underscore'
import Loading from '../common/Loading';
import env from '../env'
import { storeUserProfile } from '../actions';
import { useSelector, useDispatch } from 'react-redux'
const Editprofile = () => {
    let [isLoading, setLoading] = useState(true)
    let [user, setUser] = useState({
        user_id: "",
        name: '',
        username: "",
        access_token:'',
        website: '',
        dob: "",
        mobile: "",
        email: "",
        description: "",
        lang: "",
        gender: "",
        profile_pic: '',
        editMode:false

    })
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let state = useSelector((state) => state.userReducer)
    let data = state.data
    const openFileUpload = () => {
        const fileInput = document.getElementById('edit_file')
        fileInput.click()
    }
    useEffect(() => {
        dispatch(storeUserProfile())
    }, [0])
    setTimeout(() => {
        let response = isUserLoging()
        if (!response.login) {
            navigate('/login')
        } else {
            if(!user.editMode){
                  setUser(data)
            }
        }
        setLoading(false)
    }, 900);
    let formData = new FormData()
    const uploadImages = (e) => {

        let image = document.getElementById('profile_img')
        image.src = URL.createObjectURL(e.target.files[0])
        const name = e.target.name
        setUser((prev) => {
            return { ...prev, [name]: e.target.files[0],editMode:true }
        })


    }
    const whileFillUpForm = (e) => {
        const name = e.target.name
        let value = e.target.value
        setUser((prev) => {
            return { ...prev, [name]: value,editMode:true}
        })
    }
    const onSubmitForm = async () => {
        if (user.name == '') {
            toast.error('name required!')
        } else if (user.username == '') {
            toast.error('username required!')
        } else if (user.email == '') {
            toast.error('email required!')
        } else if (user.mobile == '') {
            toast.error('mobile number required!')
        } else if (user.website == '') {
            toast.error('website required!')
        } else if (user.description == '') {
            toast.error('description required!')
        } else if (user.gender = '') {
            toast.error('gender required!')
        } else if (user.dob == '') {
            toast.error('date of birth requried!')
        } else if (user.lang == '') {
            toast.error('language required!')
        } else {
            let response = isUserLoging()
            let {access_token}=response.user
            formData.append('profile_pic', user.profile_pic)
            formData.append('user_id', user.user_id)
            formData.append('access_token',access_token)
            formData.append('name', user.name)
            formData.append('username', user.username)
            formData.append('email', user.email)
            formData.append('mobile', user.mobile)
            formData.append('website', user.website)
            formData.append('description', user.description)
            formData.append('gender', user.gender)
            formData.append('dob', user.dob)
            formData.append('lang', user.lang)

            axios.post(`${env.URL}/dipicious/api/user/save_profile`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM=',
                    'Content-Type': 'multipart/form-data',
                }
            }).then(async (response) => {
                if (response.data.flag == 1) {
                    toast.success('your account updated')
                    navigate('/profile#activities')
                }
            })

        }

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='row col-md-8 col-12 m-auto mt-3 p-3  edit_profile_container'>
                <div className='col-lg-3 col-12'>
                    <div className="circular m-auto">
                        <input type="file" name='profile_pic' id='edit_file' onChange={uploadImages} style={{ display: 'none' }} multiple />
                        <img src={data.profile_image} id='profile_img' />
                    </div>
                    <div className='edit_button mt-1 row'>
                        <Button size='small' variant="outlined" className='btn col-5' onClick={openFileUpload}><Edit /></Button>&nbsp;
                        <Button size='small' variant="outlined" className='btn col-5' onClick={() => {
                            setUser({ ...user, profile_image: "" })
                        }}><Delete /></Button>
                    </div>

                </div>
                <div className='col-lg-8 col-12 edit_form'>
                    <h5>Personal Infomation</h5>
                    <hr />
                    <div className='row'>
                        <div className="mb-1 col-lg-6 form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                id="" name='name' placeholder='Name'
                                onChange={whileFillUpForm}
                                // defaultValue={}
                                value={user.name} />
                        </div>
                        <div className="mb-1 col-lg-6">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                id="" name='username' placeholder='user name'
                                onChange={whileFillUpForm}
                                value={user.username} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="mb-1 col-lg-6 form-group">
                            <label>Website</label>
                            <input type="text" className="form-control"
                                id="" name='website' placeholder='Website'
                                onChange={whileFillUpForm}
                                value={user.website == "0" ? '' : user.website} />
                        </div>
                        <div className="mb-1 col-lg-6">
                            <label>Mobile no</label>
                            <input type="text" className="form-control"
                                id="" name='mobile' placeholder='Mobile No'
                                onChange={whileFillUpForm}
                                value={user.mobile} />
                        </div>
                    </div>
                    <div className="mb-1 mt-1">
                        <label>Email</label>
                        <input type="text" className="form-control"
                            id="" name='email' placeholder='email'
                            onChange={whileFillUpForm}
                            value={user.email} />
                    </div>
                    <div className="mb-1 mt-1">
                        <label>Description</label>
                        <textarea className="form-control"
                            name='description' placeholder='Description...'
                            onChange={whileFillUpForm}
                            value={user.description != 0 ? user.description : ''} />
                    </div>
                    <div className='row mt-3'>
                        <div className="mb-1 col-lg-6">
                            <label>Select Language</label>
                            <select name="lang" id="" className="form-control mt-1" onChange={whileFillUpForm}>
                                <option value='' selected disabled>Select Language</option>
                                <option value="0">English</option>
                                <option value="1">Arabic</option>
                            </select>
                        </div>
                        <div className="mb-1 col-lg-6">
                            <label>Select Gender</label>
                            <select name="gender" id="" className="form-control mt-1" onChange={whileFillUpForm}>
                                <option value='' selected disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-1 mt-1">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control"
                            name='dob' placeholder=''
                            onChange={whileFillUpForm}
                        />
                    </div>


                    <button className="btn btn-danger login_btn edit_btn m-auto mt-4" onClick={onSubmitForm}>Save Changes</button>
                </div>
            </div>

        </>
    )
}
export default Editprofile