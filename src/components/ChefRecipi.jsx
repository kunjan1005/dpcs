import React from "react";
import { NavLink } from "react-router-dom";
import StoreProduct from "../common/StoreProduct";
import logo from '../images/salad.png'
const ChefRecipi = () => {
    return (
        <div className="container">
         
            <div className="row mt-1 border bg-white">
                <h6 className="">Desserts</h6>
                <div className='row'>
                <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
            <div className="row mt-1 border bg-white">
                <h6>Healthy Food</h6>
                <div className='row'>
                    <StoreProduct />
                    <p style={{ float: "right" }}>See more</p>
                </div>
            </div>
           
        </div>
    )
}
export default ChefRecipi;