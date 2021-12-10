import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import Active from '@material-ui/icons/FiberManualRecord'
import LocationOn from '@material-ui/icons/LocationOn'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import Delivery from '@material-ui/icons/DirectionsBikeOutlined'


import { TableHead, Paper, Table, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core'
import { Tooltip } from "@material-ui/core";
import OnlionOrder from "@material-ui/icons/MobileFriendly"
import env from '../env'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleRestaurant } from '../actions/index'
import Loading from '../common/Loading'
import _ from 'underscore'
const Restaurant = () => {
    let [restaurant, setRestaurant] = useState({})
    let dispatch = useDispatch()
    let restaurant_id = useParams('sid')
    let state = useSelector((state) => state.restaurantReducer)
    let restaurantData = state.restaurant
    useEffect(() => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user

        axios.post(`${env.URL}/dipicious/api/user/restaurant_detail`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: restaurant_id.sid }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {

            dispatch(getSingleRestaurant(response.data.data))


        })

    }, [1])


    setTimeout(() => {
        setRestaurant(restaurantData)
    }, 900);
    if (_.isEmpty(restaurant)) {
        return <Loading />
    }
    return (<>
        <div className="container-fluid mt-2 mb-3">
            <div className="row no-gutters">
                <div className="col-md-5 pr-2">
                    <div className="res-card">
                        <div className="demo">
                            <ul id="lightSlider">
                                <li data-thumb=""> <img src={`${env.URL}/dipicious/${restaurant.image_restaurant[0].image_url}`} /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="res-card mt-2">
                        <h6>Reviews</h6>
                        <div className="d-flex flex-row">
                            <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1 font-weight-bold">4.6</span>
                        </div>
                        <hr />
                        <div className="res-badges"> <span className="badge bg-dark ">All (230)</span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
                        <hr />
                        <div className="res-comment-section">

                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="res-card">
                        <div className="res-bout">
                            <h4><span className="font-weight-bold profile_title">{restaurant.restaurant_name}</span></h4>
                            <h6 className="font-weight-bold">{restaurant.username}</h6>
                        </div>
                        <div className="res-buttons">
                            <button className="btn btn-outline-danger btn-long res-cart">Book</button>&nbsp;
                            <button className="btn btn-outline-danger btn-long buy">Buy it Now</button>
                            {restaurant.is_open == 1 ? <small ><Active style={{ width: "15px", color: "greenyellow" }} /><b>Active</b></small> : <small ><Active style={{ width: "15px", color: "red" }} /><b>Close</b></small>}
                        </div>
                        <div className="res-product-description">
                            <div className="res-similar-products mt-3 d-flex flex-row">

                                {restaurant.pickup_or_delivery ?
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='Delivery available'>
                                                <Delivery style={{ color: 'green' }} />
                                            </Tooltip></div> </div> :
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='Delivery not available'>
                                                <Delivery style={{ color: 'red' }} />
                                            </Tooltip></div></div>
                                }
                                {restaurant.is_online_order ?
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='online order'>
                                                <OnlionOrder style={{ color: 'green' }} />
                                            </Tooltip></div></div> :
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='offline order'>
                                                <OnlionOrder style={{ color: 'red' }} />
                                            </Tooltip></div></div>}

                                {restaurant.is_table_online ?
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='table availabel'>
                                                <RestaurantIcon style={{ color: 'green' }} />
                                            </Tooltip></div></div> :
                                    <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <div className="res-card-body">
                                            <Tooltip title='offline table only'>
                                                <RestaurantIcon style={{ color: 'red' }} />
                                            </Tooltip></div></div>}
                            </div>




                        </div>
                        <div className="res-card mt-2"> <span className='profile_title'><b>Cuisine</b></span>
                            <hr />
                            <div className="res-similar-products mt-2 d-flex flex-row">
                                {restaurant.cuisine.map((each) => {
                                    return <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <img src={`${env.URL}/dipicious/${each.icon}`} className="card-img-top" alt="..." />
                                        <div className="res-card-body">
                                            <small className="card-title">{each.name}</small>
                                        </div>
                                    </div>
                                })}


                            </div>
                        </div>
                        <div className="res-card mt-2"> <span className='profile_title'><b>Restaurant type</b></span>
                            <hr />
                            <div className="res-similar-products mt-2 d-flex flex-row">
                                {restaurant.restaurant_type.map((each) => {
                                    return <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                        <img src={`${env.URL}/dipicious/${each.icon}`} className="card-img-top" alt="..." />
                                        <div className="res-ard-body">
                                            <small className="card-title">{each.name}</small>
                                        </div>
                                    </div>
                                })}


                            </div>
                        </div>
                        <hr />

                    </div>
                    <div className="res-card mt-2"> <span className='profile_title'><b>Restaurant Pictures</b></span>
                        <div className="res-similar-products mt-2 d-flex flex-row">
                            {restaurant.image_restaurant.map((each) => {
                                return <div className="res-card  p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src={`${env.URL}/dipicious/${each.image_url}`} className="card-img-top" alt="..." />

                                </div>
                            })}

                        </div>
                    </div>
                    <div className="res-card mt-2">
                    <span className='profile_title'><b>Delivery Schedule</b></span>
                    <div className="res-product-description">
                    
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead style={{backgroundColor:"#d31f33"}}>
                                    <TableRow  >
                                        <TableCell></TableCell>
                                        {restaurant.hour_full_data.map((each) => {
                                            return <TableCell style={{fontSize:"15px",color:"white",fontWeight:"bolder"}}>{each.day_name}</TableCell>
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow
                                        key=''
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">Morning</TableCell>
                                        {restaurant.hour_full_data.map((each) => {
                                            return <TableCell align="right" style={{fontSize:"10px"}}>{each.strat_time_morning}-{each.end_time_morning}</TableCell>
                                        })}

                                    </TableRow>
                                    <TableRow
                                        key=''
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">Afternoon</TableCell>
                                        {restaurant.hour_full_data.map((each) => {
                                            return <TableCell align="right" style={{fontSize:"10px"}}>{each.strat_time_afternoon}-{each.end_time_afternoon}</TableCell>
                                        })}

                                    </TableRow>


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    </div>

                </div>
            </div>
        </div>

    </>)
}
export default Restaurant