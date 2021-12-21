import React,{useEffect} from 'react'
import { FormControl, Input } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import { InputLabel, Button } from '@material-ui/core'
import Exit from '@material-ui/icons/Clear'
import { MenuItem, Select, FormHelperText, TextareaAutosize, IconButton } from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import { SetDipIn } from '../components/Restaurant'
const InputFile = styled('input')({
    display: 'none',
});
const CustomForm = () => {
    // let dispatch=useDispatch()
    // useEffect(()=>{dispatch()},[1])
    return (<>
    <SetDipIn.Consumer >{(setDip)=>{
        return <>
        <div className='form-container' style={{height:"100%"}}>
        <span style={{float:"right"}}><Exit onClick={()=>setDip(false)} /></span>
                <h4 className='profile_title' style={{textAlign:'center'}}> 
                Dip in</h4>
                <hr></hr>
            <div className='mt-3'>
                <FormControl required fullWidth>
                    <InputLabel id="demo-simple-select-required-label">Choose a restaurant to dip in</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value=""
                        label="Restaurant *"
                        onChange=""
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </div>
            <div className='mt-3'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=""
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='mt-3'>
                <FormControl fullWidth>
                    <TextareaAutosize

                        aria-label="minimum height"
                        minRows={4}
                        placeholder="Minimum 3 rows"
                        style={500}
                    />
                </FormControl>
            </div>
            <div className='mt-3'>
                <label>media</label>
                <hr></hr>
                <FormControl>
                    <label htmlFor="icon-button-file">
                        <InputFile accept="image/*" id="icon-button-file" type="file" />
                        <div className='input_box'>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </div>
                    </label>

                </FormControl>
                

            </div>
            <div className='mt-3'>
            <button className='btn btn-primary m-auto done d-block'>Post</button>
            </div>

        </div></>
    }}
        
        </SetDipIn.Consumer>
    </>)
}
export default CustomForm