import React,{useEffect} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CartList from "../common/CartList";
import {useDispatch} from 'react-redux'
import { cartData } from "../actions";
import { Navigate, useNavigate, useParams } from "react-router";
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import { useSelector } from "react-redux";
import _ from 'underscore'
const Cart = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let state=useSelector((state)=>state.cartReducer)
    let {totalPrice}=state
    let {sid}=useParams('sid')
    useEffect(()=>{dispatch(cartData(sid))},[2])
    if (_.isEmpty(state.item)) {
        return <div class="error text-center mt-3">
                  <h3 class="cart-heading m-auto mt-3">Your cart is empty</h3>
                </div>
    }
    console.log("cart data",totalPrice)
    return (
        <>
            <div className="Cart-Container mt-4">
                <div class="cart-header">
                    <h3 class="cart-heading">Shopping Cart</h3>
                    <h3 class="cart-heading">Total Amount : Kd {totalPrice}</h3>
                    <h5 class="Action" onClick={()=>{navigate('/restaurant/checkout')}}>Check out <ArrowForwardIcon/></h5>
                </div>
                <hr/>
                <div className="cart-items-container">
                    <Scrollbars>
                      <CartList refresh={()=>dispatch(cartData(sid))} />
                    </Scrollbars>

                </div>

            </div>
        </>
    )
}
export default Cart