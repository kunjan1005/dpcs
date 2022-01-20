import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'underscore'
import Loading from '../common/Loading'
import success from '../images/correct.png'

const SuccessModel = (props) => {
    return <>
        <div className="form-popup py-5 m-auto " >
      
            <div className='col-sm-3 m-auto text-center bg-white'>
            <span style={{
                        float: 'right',
                        zIndex: 99,
                        color: "black",
                        cursor: "pointer"
                    }}
                        onClick={() => { props.close(false) }}>&times;</span>
                <img src={success} className='m-auto' style={{width:"5.5rem",height:"5rem"}}/>
                <p>Your request of your table booking at <b>Zarah</b>,<small style={{color:"orange"}}>Tommmor</small> and <small style={{color:"orange"}}>03:30</small> is panding restaurant approval</p>

                <div className=" mt-4 col-12 p-3">
                </div>
            </div>
        </div>
    </>
}
export default SuccessModel