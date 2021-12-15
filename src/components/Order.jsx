import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import env from '../env'
import { IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleRestaurant } from '../actions/index'
import Loading from '../common/Loading'
import AddDipin from './dipComponents/AddDipIn'
import _ from 'underscore'
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModelForm from '../custom/ModelForm';
import {restaurantOrderDetails} from '../actions/index'
const Order = () => {
    let [restaurant, setRestaurant] = useState({})
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    let restaurant_id = useParams('sid')
    let state = useSelector((state) => state.restaurantOrderReducer)
    let restaurantData = state.restaurantOrderDetails

    useEffect(() => {
      
            dispatch(restaurantOrderDetails(restaurant_id.sid))

        return () => {
            setRestaurant({})
        }

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
                        <h3 className='profile_title'>{restaurant.restaurant_name}</h3>

                        <div className="res-comment-section">
                            <span className='profile_pick'>AVG: {restaurant.delivery_time_estimation}min</span>&nbsp;&nbsp;&nbsp;
                            <span className='profile_pick'>MIN: {restaurant.min_order_price} Kd</span>&nbsp;&nbsp;&nbsp;
                            <span className='profile_pick'>DELIVERY: {restaurant.delivery_charge} Kd</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="res-card">
                        <span className='profile_title'><b>Test</b></span>
                        <hr />
                
                        <div className="res-card mt-2 row items">
                            <div className='product_pick col-lg-3'>
                                <img src='https://tse3.mm.bing.net/th?id=OIP.R2yUp_MMHqec9NZpSx-X5gHaE7&pid=Api&P=0&w=233&h=155' />
                            </div>
                            <div className='col-lg-7'>
                                <h5 className='profile_pick'>test</h5>
                                <p>hello this is testing data and and i m doing testing ton this page </p>
                            </div>
                            <div className='col-lg-2 items-align-right row'>
                              
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCart />
                                </IconButton>
                            
                                <div class="quantity">
                                    <a href="#" class="quantity__minus"><span>-</span></a>
                                    <input name="quantity" type="text" class="quantity__input" value="1" />
                                    <a href="#" class="quantity__plus"><span>+</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="res-card mt-2 row items">
                            <div className='product_pick col-lg-3'>
                                <img src='https://tse3.mm.bing.net/th?id=OIP.R2yUp_MMHqec9NZpSx-X5gHaE7&pid=Api&P=0&w=233&h=155' />
                            </div>
                            <div className='col-lg-7'>
                                <h5 className='profile_pick'>test</h5>
                                <p>hello this is testing data and and i m doing testing ton this page </p>
                            </div>
                            <div className='col-lg-2 items-align-right row'>
                              
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCart />
                                </IconButton>
                            
                                <div class="quantity">
                                    <a href="#" class="quantity__minus"><span>-</span></a>
                                    <input name="quantity" type="text" class="quantity__input" value="1" />
                                    <a href="#" class="quantity__plus"><span>+</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Order