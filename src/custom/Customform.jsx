import React, { useState } from 'react'
import { FormControl, Input } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import Exit from '@material-ui/icons/Clear'
import { TextareaAutosize, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { SetDipIn } from '../components/Restaurant'
import { getLocation } from '../actions/index'
import { useEffect } from 'react'
import img from '../images/dpcs_logo.png'
import { isUserLoging } from '../authorization/useAuth'
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'
const InputFile = styled('input')({
    display: 'none',
});
const CustomForm = ({ data, restaurant_id }) => {
    let dispatch = useDispatch()
    let [formData, setFormData] = useState({
        restaurant_id,
        location_id: '',
        discription: "",
        post_type: 1
    })
    let { locations } = useSelector((state) => state.restaurantReducer)
    useEffect(() => {
        dispatch(getLocation(restaurant_id))

    }, [1])
    let images = []
    let imagepath = []
    const uploadPicture = (e) => {
        imagepath.push(URL.createObjectURL(e.target.files[0]))
        images.push(e.target.files[0])
    }
    const onChangeEvent = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
        dispatch(getLocation(formData.restaurant_id))
    
    }
    const saveDipin = () => {
       let {user}= isUserLoging()
       let { user_id, access_token, lang } =user
       let formDataPost=new FormData()
       formDataPost.append('restaurant_id',formData.restaurant_id)
       formDataPost.append('location_id',formData.location_id)
       formDataPost.append('discription',formData.discription)
       formDataPost.append('post_type',formData.post_type)
       formDataPost.append('images',images)
       formDataPost.append('user_id', user_id)
       formDataPost.append('access_token', access_token)
       formDataPost.append('lang', lang)
       axios.post(`${env.URL}/dipicious/api/user/add_post`, formDataPost, {
           headers: {
               'Content-Type': 'multipart/form-data',
               'Authorization': 'Basic cm9vdDoxMjM='

           }
       }).then((response)=>{
        if(response.data.flag){
             toast.success(response.data.msg)
        }else{
            toast.error('something went wrong..')
        }
       })
       
    //    return ''
    }
    return (<>
        <SetDipIn.Consumer >{(setDip) => {
            return <>
                <div className='form-container'>
                    <span style={{ float: "right" }}><Exit onClick={() => setDip(false)} /></span>
                    <h4 className='profile_title' style={{ textAlign: 'center' }}>
                        Dip in</h4>
                    <hr></hr>
                    <div className='p-0'>
                        <div className='mt-3'>
                            <select className="form-control" name='restaurant_id' onChange={onChangeEvent}>
                                <option selected>Select Restaurant</option>
                                {data.map((each) => {
                                    return each.restaurant_id == restaurant_id ?
                                        <option value={each.restaurant_id} selected>{each.restaurant_name}</option> :
                                        <option value={each.restaurant_id}>{each.restaurant_name}</option>
                                })}
                            </select>
                        </div>
                        <div className='mt-3'>

                            <div className='mt-3'>
                                <select className="form-control" name='location_id' onChange={onChangeEvent} defaultValue={formData.location_id}>
                                    <option selected>Select Location</option>
                                    {locations == undefined ? '' : locations.map((each) => {
                                        return <option value={each.location_id} selected>{each.location_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <FormControl fullWidth >
                                <TextareaAutosize
                                    className='p-1'
                                    aria-label="minimum height"
                                    minRows={4}
                                    placeholder="Minimum 3 rows"
                                    style={500}
                                    name='discription'
                                    onChange={onChangeEvent}
                                />
                            </FormControl>
                        </div>
                        <div className='mt-3 row p-2'>
                            <label><b>media</b></label>

                            <FormControl className='col-lg-2 dip-div'>
                                <label htmlFor="icon-button-file">
                                    <InputFile accept="image/*" id="icon-button-file" type="file" onChange={uploadPicture} />
                                    <div className='input_box'>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </div>
                                </label>
                            </FormControl>
                            <div id='dip-uploaded-iamges'>
                                {imagepath.map((img)=>{
                                    return <div className='dip-imag-container ml-1 col-lg-2'>
                                                 <img src={img} />
                                   </div>
                                })}

                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary m-auto done d-block' onClick={saveDipin}>Post</button>
                        </div>
                    </div>
                </div>
            </>
        }}

        </SetDipIn.Consumer>
    </>)
}
export default CustomForm