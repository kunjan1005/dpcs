import React, { useEffect, useState } from "react"
import Logo from '../images/salad.png'
import logo from '../images/order-details.png'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'underscore'
import Loading from '../common/Loading'
import { storeOrderDetails } from "../actions"
import { useParams } from "react-router"
import CustomReorderBook from '../custom/CustomReorder'

const OrderDetails = () => {

    let [order, setOrder] = useState({})
    let [show,showReorder]=useState(false)
    let { order_id } = useParams('order_id')
    let { orderDetail } = useSelector((state) => state.restaurantOrderReducer)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(storeOrderDetails(order_id))
        setOrder((prev) => {
            return { ...prev, ...orderDetail }
        })
    }, [1])
    if (_.isEmpty(order)) {
        return <Loading />
    } else if (_.isEmpty(order.items)) {
        return <Loading />
    }
    return (<>
       
        <div className="conntainer">
            {show?<CustomReorderBook close={showReorder} order_id={order.order_id}/>:""}
            <div className="row pb-5">
                <h3 className="text-center bg-danger text-white" style={{ width: "100% !important;" }}>Order Details</h3>
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                    {order.items.map((each) => {
                        return <div className="my-orders mt-5">
                            <div className="row p-1">
                                <div className="col-sm-4 col-4">
                                    <img src={Logo} className="logo-salad"></img>
                                </div>
                                <div className="col-sm-6 col-5 order-details">
                                    <p className="p text-warning">{each.item_name}</p>
                                    <p className="p text-success">Qty : <span className="text-warning">{each.quantity}</span></p>
                                    <p className="p">{each.created_date}</p>
                                    <p className="p">add once:</p>
                                </div>
                                <div className="col-sm-2 col-2">
                                    <p className="text-danger price">KD {each.item_price}</p>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className="my-orders mt-5">
                        <div className="row">
                            <div className="col-sm-6 col-6">
                                <p className="text-danger p">Total</p>
                            </div>
                            <div className="col-sm-6 col-6">
                                <p className="text-danger text-right p">KD {order.total_price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-5 col-12">
                    <div className="my-orders mt-5">
                        <p className="p">Restaurant :<span className="text-danger">{order.restaurant_name}</span></p>
                        <hr />
                        <p className="p">Date :<span className="text-danger">  {order.created_date.split(' ')[0]}</span></p>
                        <hr />
                        <p className="p">Time :<span className="text-danger"> {order.created_date.split(' ')[1]}</span></p>
                        <hr />
                        <div className="row">
                            <div className="col-sm-1 col-1">

                                <div className={order.status == 1 || order.status == 2 ? 'status_success panding' : 'panding'}> </div>
                                <div className={order.status == 2 || order.status == 3 ? 'status_success approve' : 'approve'}></div>
                                <div className={order.status == 3 ? 'status_success checkout' : 'checkout'}></div>

                            </div>
                            <div className="col-sm-6 col-6">
                                <p>Pending</p>
                                <p>Approved</p>
                                <p>out Of Delivery</p>
                            </div>
                            <div className="col-sm-4 col-4">
                                {order.times.map((each,index) => {
                                    return <p className="text-right" key={index}>{each.change_date.split(' ')[1]}</p>
                                })}

                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-sm-4 col-1 mt-6">
                    <div className="col-12 col-sm-12">
                        <button className="btn btn-success m-auto" onClick={()=>showReorder(true)}>Re-order</button>
                    </div>

                </div>

            </div>
        </div>
    
    </>)
}
export default OrderDetails