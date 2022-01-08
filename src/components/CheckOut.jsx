import React, { useEffect } from "react"
import { NavLink,useLocation} from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addressData, getCartData, getRestaurantOrderDetails } from "../actions";
import { isUserLoging } from "../authorization/useAuth";
import axios from "axios";
import env from "../env";
import { toast } from "react-toastify";
import CustomAddressBook from "../custom/AddressBook";

const CheckOut = () => {
    const [order, setOrder] = useState({
        description: '',
        coupon_id: '',
        payment_method: '',
    })
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    const dispatch = useDispatch()
    const { cartReducer, addressReducer, restaurantOrderReducer } = useSelector((state) => {
        return {
            cartReducer: state.cartReducer,
            addressReducer: state.addressReducer,
            restaurantOrderReducer: state.restaurantOrderReducer
        }
    })
    useEffect(() => {
        dispatch(addressData())
        dispatch(getCartData())
        dispatch(getRestaurantOrderDetails())
    }, [1])
    const placeOrder = () => {
        let userData = isUserLoging()
        let { user_id, lang, access_token } = userData.user
        let { address__id } = addressReducer.default
        let { restaurent_id } = cartReducer.item[0]
        let cart_data = cartReducer.item.map((each) => {
            return each.cart_id
        })

        let total_price = cartReducer.totalPrice + parseFloat(restaurantOrderReducer.restaurantOrderDetails.delivery)
        axios.post(`${env.URL}/dipicious/api/user/make_order`,
            JSON.stringify({ user_id, lang, access_token, address__id, sub_total: cartReducer.totalPrice, total_price, cart_data, ...order, restaurent_id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((result) => {
            toast.success('Order placed successfully...')
        }).catch((error) => {
            toast.error('order not placed...')
        })

    }
    const onchangesHandle=(event)=>{
      setOrder({...order,[event.target.name]:event.target.value})
    }
    return (<>

      {tabindex=='address'?<CustomAddressBook/>:''}
      <h3 className="text-center bg-danger text-white" data-toggle="modal" data-target="#myModal">Checkout</h3>
        <div className="container py-5">

            <button type="button" className="btn collapse-button mt-5" data-toggle="collapse" data-target="#demo">
                <span className="float-left">Have a coupon?</span><span className="float-right">Click here to enter code</span>
            </button>
            
            <div id="demo" className="collapse mt-3">
                <input type="text" name="coupon" className="cc" placeholder="Enter coupon code here"></input>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <h5 className="text-danger mt-5">Delivery Address</h5>
                    <div className="d-add mt-4 col-12">
                    <span className="float-right"><NavLink to='#address'><p>Change</p></NavLink></span>
                        <p className="text-warning add">{addressReducer.default.address_type}</p>
                        <p className="add">{addressReducer.default.address_name}</p>
                        <p className="add">Mobile Number:<NavLink to="#">{addressReducer.default.mobile_number}</NavLink></p>
                    </div>

                    <div className="">
                        <h5 className="mt-4 text-danger">Additional information</h5>
                        <div className="mt-4 additional-info">
                            <textarea className="notes col-12" 
                                     placeholder="Notes about your order, e.g. special notes for delivery" 
                                     onChange={onchangesHandle}
                                     name='description'
                                     value={order.description}></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h5 className="mt-5 text-danger">Item</h5>
                    <hr className="w-75" />
                    <div className="your-order col-12">
                        {cartReducer.item.map((each) => {
                            return <>
                                <p>{each.quantity}x  {each.item_detail.item_name}<span className="float-right">KD {each.cart_item_price}</span></p>
                                <hr />
                            </>
                        })}

                        <p><b>Subtotal</b><span className="float-right">KD {cartReducer.totalPrice}</span></p>

                        <hr />
                        <p><b>Delivery Fee</b><span className="float-right">KD {restaurantOrderReducer.restaurantOrderDetails.delivery}</span></p>

                        <hr />
                        <p><b>Total</b><span className="float-right">KD {cartReducer.totalPrice + parseFloat(restaurantOrderReducer.restaurantOrderDetails.delivery)}</span></p>
                    </div>

                    <h5 className="mt-5 text-danger">Pay with</h5>
                    <hr className="w-75" />
                    <div className="payment col-12">
                        <p>Cash<span className="float-right"><input type="radio" id="" checked name="payment_method" onChange={onchangesHandle}></input></span></p>

                        <hr />
                        <p>Knet<span className="float-right"><input type="radio" id="" name="payment_method" onChange={onchangesHandle} ></input></span></p>
                    </div>

                    <button className="btn order-btn btn-lg mt-5 mb-3" onClick={placeOrder}>Place Order<i className="fa fa-left-arrow"></i></button>
                </div>
            </div>
        </div>
    </>)
}

export default CheckOut