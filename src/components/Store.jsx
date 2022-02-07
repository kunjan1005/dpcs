import React from "react";
import { NavLink } from "react-router-dom";
import StoreProduct from "../common/StoreProduct";
import logo from '../images/salad.png'
const Store = () => {
    return (
        <div className="container  mt-3">
            <div className='row border bg-white'>
                <p className="col-lg-9 col-9"> Total Points</p>
                <div className="col-lg-3 col-3">324</div>
            </div>
            <div className="row m-2 border bg-white">
                <h6 className="">Things You Can Buy</h6>
                <div className='row'>
                    <h6 className="text-center">List Empty</h6>
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
            <div className="row m-2 border bg-white">
                <h6>Car Wash (QB CarWash)</h6>
                <div className='row'>
                    <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
            <div className="row m-2 border bg-white">
                <h6>Coupons</h6>
                <div className='row'>
                    <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
            <div className="row m-2 border bg-white">
                <h6>Fitness</h6>
                <div className='row'>
                    <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
            <div className="row m-2 border bg-white">
                <h6>Kitchen Appliances</h6>
                <div className='row'>
                    <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
        </div>
    )
}
export default Store;