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
const Editprofile = () => {
    let [isLoading,setLoading]=useState(true)
    let [user, setUser] = useState({
        user_id: "",
        name: '',
        username: "",
        website: '',
        dob: "",
        mobile: "",
        email: "",
        description: "",
        lang: "",
        gender: ""

    })
    let navigate = useNavigate()
    const openFileUpload = () => {
        const fileInput = document.getElementById('edit_file')
        fileInput.click()
    }
    useEffect(() => {
        
        setTimeout(() => {

            let response = isUserLoging()
            if (response.login) {
                
                setUser(response.user)
                
            } else {
                navigate('/login')
            }
            setLoading(false)
        }, 900);
        return () => {
           
            setUser({})
        }
    }, [1])
    console.log(user)
    const whileFillUpForm = (e) => {
        const name = e.target.name
        let value = name == 'profile_image' ? URL.createObjectURL(e.target.files[0]) : e.target.value
        if (name == 'profile_image') {
            let image = document.getElementById('profile_img')
            image.src = URL.createObjectURL(e.target.files[0])
        }
        setUser(() => {
            return { ...user, [name]: value }
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
        }
        let jsonData = JSON.stringify({ ...user })
        axios.post(`${env.URL}/dipicious/api/user/save_profile`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then(async (response) => {
            console.log(response)
            if (response.data.flag == 1) {
                toast.success('your account updated')
                navigate('/profile/edit')
            }
        })

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='row col-md-8 col-12 m-auto mt-3 p-3  edit_profile_container'>
                <div className='col-lg-3 col-12'>
                    <div className="circular m-auto">
                        <input type="file" name='profile_image' id='edit_file' onChange={whileFillUpForm} style={{ display: 'none' }} />
                        <img src={user.profile_image} id='profile_img' />
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
                                value={user.mobile?user.mobile:user.temp_mobile_no} />
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
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-1 mt-1">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control"
                            name='dob' placeholder=''
                            onChange={whileFillUpForm}
                            value={user.dob} />
                    </div>


                    <button className="btn btn-danger login_btn edit_btn m-auto mt-4" onClick={onSubmitForm}>Save Changes</button>
                </div>
            </div>

        </>
    )
}
export default Editprofile