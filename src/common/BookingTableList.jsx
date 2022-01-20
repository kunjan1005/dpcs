import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeTableDetails,storeTableBookingDetails } from '../actions/index'
import { useSelector } from "react-redux";
import env from "../env";
import _ from 'underscore'
import TableDetails from "../custom/TableDetails";

const BookingTableList = () => {
    let [show, showTableDetails] = useState(false)
    let [size, setsize] = useState(window.screen.width)
    let dispatch = useDispatch()
    let { tableDetails } = useSelector((state) => state.bookingTableDetails)
    useEffect(() => {
        dispatch(storeTableBookingDetails())

    }, [1])
 
   
    return (<>
        <div className="conntainer pt-2 row mt-2">
          {show?<TableDetails close={showTableDetails } />:''}
            <div className="col-lg-8 m-auto">
                <h4 className="text-center" style={{ width: "100% !important;" }}>Table Reservation</h4>
                <hr />

                <div className="col-sm-10 m-auto">
       
                    {tableDetails.map((each)=>{
                         
                        return  <> <div className="my-orders mt-1 " onClick={()=>{
                            dispatch(storeTableDetails(each.booking_table_id))
                            showTableDetails(true)
                            }}>
                           
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
                                </div>
                            </div>
                        </div></>})
                        }


                </div>
            </div>

        </div>
    </>)
}
export default BookingTableList
