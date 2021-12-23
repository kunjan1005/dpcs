import React,{useEffect} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CartList from "../common/CartList";
import {useDispatch} from 'react-redux'
import { cartData } from "../actions";
import { useParams } from "react-router";
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import { useSelector } from "react-redux";
const Cart = () => {
    let dispatch=useDispatch()
    let state=useSelector((state)=>state.cartReducer)
    let {totalPrice}=state
    let {sid}=useParams('sid')
    useEffect(()=>{dispatch(cartData(sid))},[2])
    return (
        <>
            <div className="Cart-Container mt-3">
                <div class="cart-header">
                    <h3 class="cart-heading">Shopping Cart</h3>
                    <h3 class="cart-heading">Total Amount : Kd {totalPrice}</h3>
                    <h5 class="Action">Check out <ArrowForwardIcon/></h5>
                </div>
                <hr/>
                <div className="cart-items-container">
                    <Scrollbars>
                      <CartList />
                    </Scrollbars>

                </div>

            </div>
        </>
    )
}
export default Cart