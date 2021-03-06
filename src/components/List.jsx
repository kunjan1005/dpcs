import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { contentShow, contentHide, paginatedData } from '../actions/index'
import Active from '@material-ui/icons/FiberManualRecord'
import LocationOn from '@material-ui/icons/LocationOn'
import Restaurant from '@material-ui/icons/Restaurant'
import DropBox from '@material-ui/core/Box/Box'
import TextField from '@material-ui/core/TextField/TextField'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { Scrollbars } from 'react-custom-scrollbars-2';

import { getRestaurant } from '../actions/index'
import { NavLink } from "react-router-dom";
import env from "../env";
import $ from 'jquery'
import _ from "underscore";
import Loading from "../common/Loading";

const List = () => {
    let [restaurant, setRestaurant] = useState([])

    let state = useSelector((state) => {
        return {
            loginState: state.showHideReducer,
            restaurant: state.restaurantReducer
        }
    })
    let dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setRestaurant(state.restaurant.restaurants)

        }, 900);

        return () => { setRestaurant({}) }
    }, [1])
    if (_.isEmpty(restaurant)) {
        return <Loading />
    }

    return (<>
        <div className='card-list-container'>

            <h4>Recommanded</h4>

            <hr />
                <Scrollbars >
             
            <div className='list card-list'>
                {restaurant.map((res) => {
                    return <>
                        <div className='row res_img' style={{ height: "6rem", }}>

                            <div className='col-lg-2 col-3'>
                                <NavLink to={`/restaurant/${res.restaurant_id}`}>
                                    <div className="circular m-auto">
                                        <img src={`${env.URL}/dipicious/${res.image_url}`} id='profile_img' />
                                    </div>
                                </NavLink>
                            </div>
                            <div className='col-lg-10 col-9' style={{ textAlign: 'left' }}>
                                <p style={{ float: "right" }} className="offset-lg-4">{res.is_open == 1 ? <small ><Active style={{ width: "15px", color: "greenyellow" }} /><Restaurant /></small> : <small ><Active style={{ width: "15px", color: "red" }} /><Restaurant /></small>}</p>
                                <small style={{ fontSize: "18px" }}><b>{res.restaurant_name}</b></small>
                                <h6 style={{ fontSize: "10px", color: 'grey' }}><LocationOn style={{ width: "15px", color: "grey" }} />{res.locations[0].location}</h6>
                                {/* {genrateRating(res.feedback)} */}
                                <div className='rating-container' style={{ fontSize: "10px", color: "grey", float: 'right' }}>
                                    {res.feedback} feedback

                                </div>
                                <small>{res.is_table_online ? <small ><Active style={{ color: "greenyellow", width: "15px" }} /><b>Table Availabel</b></small> : <small style={{ color: "grey" }}><Active style={{ color: "red", width: "15px" }} />no Table Availabel</small>}</small>
                            </div>


                        </div>
                        <hr />
                    </>
                })}
                

                {/* <span className='see_more' onClick={state.isDisplay ? () => dispatch(contentHide()) : () => dispatch(contentShow())}>{state.text}</span> */}
            </div>
            </Scrollbars>

        </div>
    </>)
}
export default List