import React, { useEffect } from 'react'
import product_img from '../images/salad.png'
import Logo from '../images/salad.png'
import logo from '../images/order-details.png'
import { useDispatch, useSelector } from 'react-redux'
import { storeOrderDetails } from '../actions/index'
import { useState } from 'react'
import _ from 'underscore'

const OrderDetail = () => {
    let [order, setOrder] = useState({})
    let { orderDetail } = useSelector((state) => state.restaurantOrderReducer)
    let dispatch = useDispatch()
    useEffect(() => {
        setOrder((prev) => {
            return { ...prev, ...orderDetail }
        })
        return () => {
            setOrder({})
        }
    })
    if (_.isEmpty(order)) {
        return <h3>Loading....</h3>
    } else if (_.isEmpty(order.items)) {
        return <h3>Loading....</h3>
    }
    return (<>
        <div className="col-lg-6 mt-2 ">
            <div className="row">
                <h4 className="text-center" style={{ width: "100% !important;" }}>Orders Details</h4>
                <hr />
                <div className="col-sm-6">
                    {orderDetail.items.map((each) => {
                        return <div className="my-orders mt-5">
                            <div className="row p-1">
                                <div className="col-sm-4">
                                    <img src={Logo} className="logo-salad"></img>
                                </div>
                                <div className="col-sm-6 order-details">
                                    <p className="p text-warning">{each.item_name}</p>
                                    <p className="p text-success">Qty : <span className="text-warning">{each.quantity}</span></p>
                                    <p className="p">{each.created_date}</p>
                                    <p className="p">add once:</p>
                                </div>
                                <div className="col-sm-2">
                                    <p className="text-danger price">KD {each.item_price}</p>
                                </div>
                            </div>
                        </div>
                    })}

                    {/* total */}
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="text-danger p">Total</p>
                            </div>

                            <div className="col-sm-6">
                                <p className="text-danger text-right p">KD {orderDetail.total_price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-5 col-12">
                    <div className="my-orders mt-5">
                        <p className="p">Restaurant :<span className="text-danger">{orderDetail.restaurant_name}</span></p>
                        <hr />
                        <p className="p">Date :<span className="text-danger">  {orderDetail.created_date.split(' ')[0]}</span></p>
                        <hr />
                        <p className="p">Time :<span className="text-danger"> {orderDetail.created_date.split(' ')[1]}</span></p>
                        <hr />
                        <div className="row">
                            <div className="col-sm-1">

                                <div className={orderDetail.status==1 || orderDetail.status==2? 'status_success panding':'panding'}> </div>
                                <div className={orderDetail.status==2 || orderDetail.status==3? 'status_success approve':'approve'}></div>
                                <div className={orderDetail.status==3? 'status_success checkout':'checkout'}></div>

                            </div>
                            <div className="col-sm-6">
                                <p>Pending</p>
                                <p>Approved</p>
                                <p>out Of Delivery</p>
                            </div>
                            <div className="col-sm-4">
                                {orderDetail.times.map((each)=>{
                                     return <p className="text-right">{each.change_date.split(' ')[1]}</p>
                                })}
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default OrderDetail