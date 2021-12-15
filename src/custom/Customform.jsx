import React from 'react'
import { FormControl, Input } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import { InputLabel, Button } from '@material-ui/core'
import { MenuItem, Select, FormHelperText, TextareaAutosize, IconButton } from '@material-ui/core'
// import
const InputFile = styled('input')({
    display: 'none',
});
const CustomForm = () => {
    return (<>
        <div className='mt-3'>
            <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-required-label">Restaurant</InputLabel>
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
        <button className=" mt-2 btn btn-danger login_btn edit_btn" >Post</button>
    </>)
}
export default CustomForm