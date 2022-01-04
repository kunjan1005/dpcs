import React, { useState } from 'react'
import { FormControl, Input } from '@material-ui/core'
import { Height, PhotoCamera } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import Exit from '@material-ui/icons/Clear'
import { TextareaAutosize, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { SetDipIn } from '../components/Restaurant'
import { getLocation } from '../actions/index'
import { useEffect } from 'react'
import img from '../images/dpcs_logo.png'
const InputFile = styled('input')({
    display: 'none',
});
const CustomForm = ({ data, restaurant_id }) => {
    let dispatch = useDispatch()
    let [formData, setFormData] = useState({
        restaurant_id,
        location_id: '',
        discription: "",
        flag: 1
    })
    let [location, setLocation] = useState([])
    let { locations } = useSelector((state) => state.restaurantReducer)
    useEffect(() => {
        dispatch(getLocation(restaurant_id))

    }, [1])
    const onChangeEvent = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
        dispatch(getLocation(formData.restaurant_id))
        setLocation(locations)
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
                            <select className="form-control" name='location_id' onChange={onChangeEvent}>
                                <option selected>Select Location</option>
                                {location == undefined ? '' : location.map((each) => {
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
                                style = {{height:"105px"}}
                            />
                        </FormControl>
                    </div>
                    <div className='mt-3 row p-2'>
                        <label><b>media</b></label>
                   
                        <FormControl className='col-lg-2 col-3'>
                            <label htmlFor="icon-button-file">
                                <InputFile accept="image/*" id="icon-button-file" type="file" />
                                <div className='input_box'>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </div>
                            </label>
                        </FormControl>
                        <div className='dip-imag-container ml-1 col-lg-6 col-8'>
                                <img src={img} />
                            </div>   
                        </div>
                    <div className='mt-3'>
                        <button className='btn btn-primary m-auto done d-block'>Post</button>
                    </div>
                </div>
                </div>
            </>
        }}

        </SetDipIn.Consumer>
    </>)
}
export default CustomForm