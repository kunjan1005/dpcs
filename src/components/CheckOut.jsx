import React from "react"
import { NavLink } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";

const CheckOut = () => {
    return (<>
        <div className="container py-3">
            <h1 className="text-center bg-danger text-white">Checkout</h1>

            <button type="button" className="btn collapse-button mt-5" data-toggle="collapse" data-target="#demo">
                <span className="float-left">Have a coupon?</span><span className="float-right">Click here to enter code</span>
            </button>
            <div id="demo" className="collapse mt-3">
                <input type="text" name="coupon" className="cc" placeholder="Enter coupon code here"></input>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h5 className="text-danger mt-5">Delivery Address</h5>
                    <div className="d-add mt-4">
                        <p className="text-warning add">OFFICE</p>
                        <p className="add">49 St, Zahra, Kuwait</p>
                        <p className="add">Mobile Number:<NavLink to="#"> 0123456789</NavLink></p>
                    </div>

                    <div className="">
                        <h5 className="mt-4 text-danger">Additional information</h5>
                        <div className="mt-4 additional-info">
                            <textarea className="notes" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h5 className="mt-5 text-danger">Item</h5>
                    <hr className="w-75" />
                    <div className="your-order">
                        <p>VegSalad<span className="float-right">KD 1.000</span></p>
                        
                        <hr />
                        <p>Subtotal<span className="float-right">KD 1.000</span></p>

                        <hr />
                        <p>Delivery Fee<span className="float-right">KD 0.000</span></p>

                        <hr />
                        <p><b>Total</b><span className="float-right">KD 1.000</span></p>
                    </div>

                    <h5 className="mt-5 text-danger">Pay with</h5>
                    <hr className="w-75" />
                    <div className="payment">
                        <p>Cash<span className="float-right"><input type="radio" id=""></input></span></p>
                        
                        <hr />
                        <p>Knet<span className="float-right"><input type="radio" id=""></input></span></p>
                    </div>

                    <button className="btn order-btn btn-lg mt-5">Place Order<i className="fa fa-left-arrow"></i></button>
                </div>
            </div>
        </div>
    </>)
}

export default CheckOut