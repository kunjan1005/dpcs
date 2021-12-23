import React,{useEffect} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CartList from "../common/CartList";
import {useDispatch} from 'react-redux'
import { cartData } from "../actions";
import { useParams } from "react-router";
const Cart = () => {
    let dispatch=useDispatch()
    let {sid}=useParams('sid')
    useEffect(()=>{dispatch(cartData(sid))},[1])
    return (
        <>
            <div className="Cart-Container">
                <div class="cart-header">
                    <h3 class="cart-heading">Shopping Cart</h3>
                    <h3 class="cart-heading">Total Amount:Kd 20</h3>
                    <h5 class="Action">Remove all</h5>
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