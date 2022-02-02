import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
const CustomCart = (props) => {
  let navigate = useNavigate()
  const addTocart = async (data) => {
    try {
      let response = await axios.post(`${env.URL}/dipicious/api/user/add_to_cart`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic cm9vdDoxMjM='
        }
      })
      toast.success('product added in the cart...')
      props.redirectTo()

    } catch (error) {
      //  alert(error)
      toast.error('something went to wrong!!')
    }

  }
  return (<AddShoppingCart onClick={() => { addTocart(props) }} />)
}
export default CustomCart