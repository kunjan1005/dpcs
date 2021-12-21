import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'
const CustomCart=(props)=>{
    const addTocart=async(data)=>{
        try{
          let response=await axios.post(`${env.URL}/dipicious/api/user/add_to_cart`,JSON.stringify(data),{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
          })
   
        }catch(error){
            //  alert(error)
            toast.error('something went to wrong!!')
        }
        console.log(data)
    }
    return (<AddShoppingCart onClick={()=>{addTocart(props)}}/>)
}
export default CustomCart