import { Delete } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import env from "../env";
import { incrementOrderQty, decrementOrderQty, removeCartItem, getCartData } from '../actions/index'
import { useEffect } from "react";
import { useState } from "react";
import _ from "underscore";
import Loading from "./Loading";

const CartList = ({refresh}) => {
    let [cart, setCart] = useState()
    let state = useSelector((state) => state.cartReducer)
    let dispatch = useDispatch()

    
    return (<>
        {state.item.map((each) => {
            return <>
                <div className="Cart-Items">

                    <div className="image-box col-lg-2 col-sm-2 col-4">
                        <img src={`${env.URL}/dipicious/${each.image}`} style={{ height: "85px" }} />
                    </div>
                    <div className="about col-lg-8 col-sm-8 col-5">
                        <h5 className="title">{each.item_detail.item_name}</h5>
                        <h6 className="subtitle mt-3">{each.item_detail.description}</h6>
                        <h6 className="subtitle mt-1">{each.cart_item_price} KD</h6>
                    </div>
                    <div className="col-sm-2 col-3">
                        <div className="quantity  ">
                            <a href="#" className="quantity__minus" onClick={() => each.quantity == 1 ? '' : dispatch(decrementOrderQty(each.cart_id))}><span>-</span></a>
                            <input name="quantity" type="text" className="quantity__input" value={each.quantity == 0 ? 1 : each.quantity} />
                            <a href="#" className="quantity__plus" onClick={() => dispatch(incrementOrderQty(each.cart_id))} ><span>+</span></a>
                        </div>
                        <div className='mt-3'
                            style={{
                                textAlign: "center",
                                fontSize: "15px",
                                borderRadius: '10rem',
                                width: '2rem',
                                padding: '5px',
                                margin: "auto",
                                cursor: "pointer",
                                color: "whitesmoke",
                                backgroundColor: '#cf2031'
                            }}
                            onClick={() => {

                                dispatch(removeCartItem(each.cart_id,refresh)) }}
                        >
                            <i class="fa fa-trash" ></i></div>
                    </div>
                </div>
                <hr />
          
                
            </>
        })}
    </>)
}
export default CartList