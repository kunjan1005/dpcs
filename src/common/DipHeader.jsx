import React, { useEffect, useState } from "react"
import Logo from '../images/salad.png'
import logo from '../images/order-details.png'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'underscore'
import Loading from '../common/Loading'
import { storeOrderDetails } from "../actions"
import { useParams } from "react-router"

const OrderDetails = () => {
  let [order, setOrder] = useState({})
  let { order_id } = useParams('order_id')
  let dispatch = useDispatch()

  let { orderDetail } = useSelector((state) => state.restaurantOrderReducer)
  useEffect(() => {
    dispatch(storeOrderDetails(order_id))
    setOrder((prev) => {
      return { ...prev, ...orderDetail }
    })
    return () => {
      setOrder({})
    }
  })
  if (_.isEmpty(order)) {
    return <Loading />
  } else if (_.isEmpty(order.items)) {
    return <Loading />
  }
  return (<>
    <div className="conntainer py-3">
      <div className="row">
        <h1 className="text-center bg-danger text-white" style={{ width: "100% !important;" }}>Order Details</h1>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div className="my-orders mt-5">
            <div className="row">
              <div className="col-sm-3 col-4">
                <img src={Logo} className="logo-salad"></img>
              </div>
              <div className="col-sm-6 col-6">
                <p className="p text-warning">Fancy medium meal</p>
                <p className="p text-success">Qty : <span className="text-warning">1</span></p>
                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                <p className="p">add once:</p>
              </div>
              <div className="col-sm-2 col-1">
                <p className="text-danger price">KD 4.000</p>
              </div>
            </div>
          </div>

          {/* second order */}
          <div className="my-orders mt-5">
            <div className="row">
              <div className="col-sm-3 col-4">
                <img src={Logo} className="logo-salad"></img>
              </div>
              <div className="col-sm-6 col-6">
                <p className="p text-warning">Fancy medium meal</p>
                <p className="p text-success">Qty : <span className="text-warning">1</span></p>
                <p className="p">31 - 12 - 2021, 09:20 PM</p>
                <p className="p">add once:</p>
              </div>
              <div className="col-sm-2 col-1">
                <p className="text-danger price">KD 4.000</p>
              </div>
            </div>
          </div>

          {/* total */}
          <div className="my-orders mt-5">
            <div className="row">
              <div className="col-sm-6 col-6">
                <p className="text-danger p">Total</p>
              </div>

              <div className="col-sm-6 col-6">
                <p className="text-danger text-right p">KD 8.000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-5 col-12">
          <div className="my-orders mt-5">
            <p className="p">Restaurant :<span className="text-danger"> Dig bil Khams</span></p>
            <hr />
            <p className="p">Date :<span className="text-danger"> 31-12-2021</span></p>
            <hr />
            <p className="p">Time :<span className="text-danger"> 8:45 PM</span></p>
            <hr />
            <div className="row">
              <div className="col-sm-1">
                <img src={logo} className="arrival"></img>
              </div>
              <div className="col-sm-7">
                <p>Pending</p>
                <p>Approved</p>
                <p>out Of Delivery</p>
              </div>
              <div className="col-sm-4">
                <p className="text-right">8:45 PM</p>
                <p className="text-right">8:50 PM</p>
                <p className="text-right">9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  </>)
}
export default OrderDetails