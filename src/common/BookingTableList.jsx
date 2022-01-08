import React, { useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";
import Logo from '../images/salad.png'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeOrder, storeTableBookingDetails } from '../actions/index'
import { useSelector } from "react-redux";
import env from "../env";
import OrderDetail from "./OrderDetail";
import _ from 'underscore'
import Loading from '../common/Loading'

const BookingTableList = () => {
    let [orderDetails, showOrderDetails] = useState(false)
    let [size, setsize] = useState(window.screen.width)
    let dispatch = useDispatch()
    let { tableDetails } = useSelector((state) => state.bookingTableDetails)
    useEffect(() => {
        dispatch(storeTableBookingDetails())

    }, [1])
   
    return (<>
        <div className="conntainer pt-2 row mt-2">
            <div className={orderDetails ? "col-lg-6" : "col-lg-8 m-auto"}>
                <h4 className="text-center" style={{ width: "100% !important;" }}>Table Reservation</h4>
                <hr />

                <div className="col-sm-10 m-auto">
       
                    {tableDetails.map((each)=>{
                        return <div className="my-orders mt-1 ">
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <img src={`${env.URL}/dipicious/${each.image_url}`} className="logo-salad"></img>
                                </div>
                                <div className="col-sm-6 col-6">
                                    <p className="p text-danger">{each.restaurant_name}</p>
                                    <p className="p text-success">
                                        {each.description}
                                        {/* {each.status == 1 ? "Pending" : each.status == 2 ? "Approved" : "Out for delivery"} */}
                                        </p> 
                                    <p className="p"></p>
                                    <p className="p"><b>ORDER ID </b>: 123</p>
                                </div>
                                <div className="col-sm-2 col-2 ">
                                  <NavLink to={`/restaurant/orderdetails/`} style={{ color: 'black' }}>
                                        <i class="fa fa-angle-right"></i>
                                    </NavLink> :
                                        <i class="fa fa-angle-right"></i>
                                
                                </div>
                            </div>
                        </div>})
                        }


                </div>
            </div>

        </div>
    </>)
}
export default BookingTableList
