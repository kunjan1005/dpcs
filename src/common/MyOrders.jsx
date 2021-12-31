import React from "react"
import { NavLink } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";
import Logo from '../images/salad.png'

const MyOrders = () => {
    return (<>
        <div className="conntainer py-3">
            <div className="row">
                <h1 className="text-center bg-danger text-white">My Orders</h1>
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={Logo} className="logo-salad"></img>
                            </div>
                            <div className="col-sm-6">
                                <p className="p text-danger">null</p>
                                <p className="p text-success">Pending</p>
                                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                                <p className="p"><b>ORDER ID </b>: 108</p>
                            </div>
                            <div className="col-sm-2">
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* second order */}
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={Logo} className="logo-salad"></img>
                            </div>
                            <div className="col-sm-6">
                                <p className="p text-danger">null</p>
                                <p className="p text-success">Pending</p>
                                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                                <p className="p"><b>ORDER ID </b>: 108</p>
                            </div>
                            <div className="col-sm-2">
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={Logo} className="logo-salad"></img>
                            </div>
                            <div className="col-sm-6">
                                <p className="p text-danger">null</p>
                                <p className="p text-success">Pending</p>
                                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                                <p className="p"><b>ORDER ID </b>: 108</p>
                            </div>
                            <div className="col-sm-2">
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* second order */}
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={Logo} className="logo-salad"></img>
                            </div>
                            <div className="col-sm-6">
                                <p className="p text-danger">null</p>
                                <p className="p text-success">Pending</p>
                                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                                <p className="p"><b>ORDER ID </b>: 108</p>
                            </div>
                            <div className="col-sm-2">
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default MyOrders
