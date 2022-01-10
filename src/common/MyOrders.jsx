import React, { useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";
import Logo from '../images/salad.png'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeOrder, storeOrderDetails } from '../actions/index'
import { useSelector } from "react-redux";
import env from "../env";
import OrderDetail from "./OrderDetail";
import _ from 'underscore'
import Loading from '../common/Loading'

const MyOrders = () => {
    let [orderDetails, showOrderDetails] = useState(false)
    let [size, setsize] = useState(window.screen.width)
    let dispatch = useDispatch()
    let { orders } = useSelector((state) => state.restaurantOrderReducer)
    useEffect(() => {
        dispatch(storeOrder())
        if(size<600){
            showOrderDetails(false)
        }
        
    }, [1])
   
    window.addEventListener('resize', () => { setsize(window.screen.width) })
    return (<>
        <div className="conntainer pt-2 row mt-2">
            <div className={orderDetails ? "col-lg-6" : "col-lg-8 m-auto col-md-12"}>
                <h4 className="text-center" style={{ width: "100% !important;" }}>My Orders</h4>
                <hr />

                <div className="col-sm-10 m-auto">
                    {orders.map((each) => {
                        return <div className="my-orders mt-1">
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <img src={each.image_url == null ? Logo : `${env.URL}/dipicious/${each.image_url}`} className="logo-salad"></img>
                                </div>
                                <div className="col-sm-6 col-6">
                                    <p className="p text-danger">{each.restaurant_name}</p>
                                    <p className="p text-success">{each.status == 1 ? "Pending" : each.status == 2 ? "Approved" : "Out for delivery"}</p>
                                    <p className="p">{each.created_date}</p>
                                    <p className="p"><b>ORDER ID </b>: {each.order_id}</p>
                                </div>
                                <div className="col-sm-2 col-2">
                                    {size <= 600 ? <NavLink to={`/restaurant/orderdetails/${each.order_id}`} style={{ color: 'black' }}>
                                        <i class="fa fa-angle-right"></i>
                                    </NavLink> :
                                        <i class="fa fa-angle-right" onClick={async () => {
                                            await dispatch(storeOrderDetails(each.order_id))
                                            showOrderDetails(true)


                                        }}></i>
                                    }
                                </div>
                            </div>
                        </div>
                    })}


                </div>
            </div>
            {orderDetails ?
                <OrderDetail /> :
                ''}

        </div>
    </>)
}
export default MyOrders
