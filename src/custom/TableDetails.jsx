import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'underscore'
import Loading from '../common/Loading'

const TableDetails = (props) => {
    let dispatch = useDispatch()
    const { table } = useSelector((state) =>state.bookingTableDetails)
    if(_.isEmpty(table)){
        return <Loading/>
    }
    return <>
        <div className="form-popup py-1 m-auto " >
            <div className='col-sm-6 m-auto bg-white'>
                <h5 className="text-danger mt-5">Booking Details
                    <span style={{
                        float: 'right',
                        zIndex: 99,
                        color: "black",
                        cursor: "pointer"
                    }}
                        onClick={() => { props.close(false) }}>&times;</span> </h5>

                <hr />
                <div className=" mt-4 col-12 p-3">
                    <h6 className="text-warning add">{table.location_data.location_name}, </h6>
                    <p className="add">{table.location_data.location},</p><hr/>
                    <h6>Date and Time</h6>
                    <p className='add'>{table.booking_date},{table.booking_time}</p><hr/>
                    <h6 className="add">Going with</h6>
                    <p className='add'>{table.going_with}</p>
                   
                    <hr/>
                    <button className='btn btn-success mt-1' >Edit</button>&nbsp;&nbsp;
                    <button className='btn btn-warning mt-1' >Cancle</button>
                </div>
            </div>
        </div>
    </>
}
export default TableDetails