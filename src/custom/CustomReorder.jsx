import React from 'react'
import { useEffect } from 'react'
import { addressData } from '../actions'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import CustomAddressBook from './AddressBook'
import { useLocation } from 'react-router'
import {isUserLoging} from "../authorization/useAuth"
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'
const CustomReorderBook = (props) => {
    let dispatch=useDispatch()
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    const {addressReducer } = useSelector((state) => {
        return {addressReducer: state.addressReducer}
    })
    const reorder=async()=>{
        let userData = isUserLoging()
        let { user_id, lang,access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/reorder_post`,
            JSON.stringify({ user_id, lang, access_token,address_id:addressReducer.default.address_id,order_id:props.order_id}), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        if(response.data.status){
            toast.success("Re-order placed successfully...")
        }else{
            toast.error("Order not placed...")
        }
    }
    useEffect(()=>{
        dispatch(addressData())
    },[1])
   
    return <>
         
        <div className="form-popup py-1 " >
            <div className='col-sm-6 m-auto bg-white'>
                <h5 className="text-danger mt-5">Delivery Address</h5>
                <hr/>
                <div className=" mt-4 col-12 p-3">
                    <span className="float-right"><NavLink to='#address'><p>Change</p></NavLink></span>
                    <p className="text-warning add">{addressReducer.default.address_type}</p>
                    <p className="add">{addressReducer.default.address_name}</p>
                    <p className="add">Mobile Number:<NavLink to="#">{addressReducer.default.mobile_number}</NavLink></p>
                    <button className='btn btn-success mt-1' onClick={()=>reorder()}>Submit</button>
                </div>
           
            </div>
        </div>
        {tabindex=='address'?<CustomAddressBook/>:''}
    </>
}
export default CustomReorderBook