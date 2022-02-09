import React from 'react';
import { NavLink } from "react-router-dom";
import env from '../env';
import logo from '../images/salad.png'
import { userRecipiDetial } from '../actions';
import { useDispatch } from 'react-redux';
const StoreProduct = (props) => {
    let dispatch = useDispatch();
    console.log(props)
    return (
        <>  <div className='p-3 d-flex scroll_'>
            {props.data.map((item, index) => {
                return <div className='border mr-1 br_5' key={index}
                    onClick={() => {
                        // dispatch(userRecipiDetial(item.product_id))
                        // props.open(true)
                    }}
                    data-toggle="modal" data-target="#myModal13">
                    <div className='m-auto'>
                        <img src={`${env.URL}/dipicious/${item.image_url}`} style={{ height: "150px", width: '150px' }} />
                    </div>

                    <div className='mt-1'>
                        <NavLink to='#'>
                            <h6 className='profile_title m-1 text-center'>{item.name}</h6>
                        </NavLink>
                        <p className='sub-title'>{item.point} ptr</p>
                        <div className="d-flex justify-content-around m-1"></div>
                    </div>
                </div>
            })}


        </div>

        </>
    )
}
export default StoreProduct;