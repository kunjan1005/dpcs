import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import Active from '@material-ui/icons/FiberManualRecord'
import LocationOn from '@material-ui/icons/LocationOn'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import env from '../env'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleRestaurant } from '../actions/index'
import Loading from '../common/Loading'
import _ from 'underscore'
const Restaurant = () => {

    // let dispatch = useDispatch()
    // let restaurant_id = useParams('sid')
    // let state = useSelector((state) => state.restaurantReducer)
    // let restaurant=state.restaurant

    // let userData = isUserLoging()
    // let { user_id, lang, latitude, longitude, access_token } = userData.user
    // const getSingleRestaurantData = () => {
    //     axios.post(`${env.URL}/dipicious/api/user/restaurant_detail`,
    //         JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: restaurant_id.sid }), {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Basic cm9vdDoxMjM='
    //         }
    //     }).then((response) => {
           
    //         dispatch(getSingleRestaurant(response.data.data))
    //     })
    // }
 
    //     getSingleRestaurantData()
 
    // console.log(restaurant)
    // if (_.isEmpty(restaurant)) {
    //     return <Loading />
    // }


    return (<>
        <div className="container-fluid mt-2 mb-3">
            <div className="row no-gutters">
                <div className="col-md-5 pr-2">
                    <div className="res-card">
                        <div className="demo">
                            <ul id="lightSlider">
                                {/* <li data-thumb=""> <img src={`${env.URL}/dipicious/${restaurant.image_restaurant[0].image_url}`} /> </li> */}
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
                            {/* <h4><span className="font-weight-bold">{restaurant.restaurant_name}</span></h4> */}
                            {/* <h6 className="font-weight-bold">{restaurant.username}</h6> */}
                        </div>
                        <div className="res-buttons">
                            <button className="btn btn-outline-danger btn-long res-cart">Book</button>&nbsp;
                            <button className="btn btn-outline-danger btn-long buy">Buy it Now</button>
                            {/* {restaurant.is_open == 1 ? <small ><Active style={{ width: "15px", color: "greenyellow" }} /><b>Active</b></small> : <small ><Active style={{ width: "15px", color: "red" }} /><b>Close</b></small>} */}
                        </div>
                        <hr />
                        <div className="res-product-description">

                            <div className="mt-2"> <span className="font-weight-bold">Description</span>
                                <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds.Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                                <div className="bullets">
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="res-card mt-2"> <span>Similar items:</span>
                        <div className="res-similar-products mt-2 d-flex flex-row">
                            <div className="res-card border p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src="https://i.imgur.com/KZpuufK.jpg" className="card-img-top" alt="..." />
                                <div className="res-ard-body">
                                    <h6 className="card-title">$1,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src="https://i.imgur.com/GwiUmQA.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">$1,699</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src="https://i.imgur.com/c9uUysL.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">$2,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src="https://i.imgur.com/kYWqL7k.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">$3,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1" style={{ width: "9rem" }}> <img src="https://i.imgur.com/DhKkTrG.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">$999</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Restaurant