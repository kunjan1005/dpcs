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
import { NavLink } from 'react-router-dom'
import { increment } from '../actions/index';
import { restaurantOrderDetails } from '../actions/index'
import CustomCart from '../custom/CartForm';
$(document).on('click', '.category_btn', function () {
    let hideShowDiv = $(this).parent().next().next()
    if (hideShowDiv.css('display') != 'none') {
        hideShowDiv.hide()
        $(this).html('<i class="fa fa-sort-down"></i>')
    } else {
        hideShowDiv.show()
        $(this).html('<i class="fa fa-sort-up"></i>')


    }
    //   .css('display','none')
})

const Order = () => {
    let {login,user}=isUserLoging()
    let  {user_id,lang,access_token}=user
    let [restaurant, setRestaurant] = useState({})


    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    let restaurant_id = useParams('sid')
    let state = useSelector((state) => state.restaurantOrderReducer)
    let restaurantData = state.restaurantOrderDetails

  
    useEffect(() => {

        dispatch(restaurantOrderDetails(restaurant_id.sid))


    }, [1])

    if (_.isEmpty(restaurantData)) {
        return <Loading />
    }
    return (<>
        <div className="container-fluid mt-2 mb-3">
            <div className="row no-gutters">

                <div className="col-md-5 pr-2">
                    <div className="res-card">
                        <span style={{ float: 'right' }}>

                            <i class="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i>

                            <span class='badge badge-warning' id='lblCartCount'> {restaurantData.cart_count} </span>

                        </span>
                        <div className="demo">
                            <ul id="lightSlider">
                                <li data-thumb=""> <img src={`${env.URL}/dipicious/${restaurantData.restautant_image}`} /> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="res-card mt-2">


                        <h3 className='profile_title'>{restaurantData.restaurant_name}</h3>

                        <div className="res-comment-section">
                            <span className='profile_pick'>AVG: {restaurantData.avg}min</span>&nbsp;&nbsp;&nbsp;
                            <span className='profile_pick'>MIN: {restaurantData.min} Kd</span>&nbsp;&nbsp;&nbsp;
                            <span className='profile_pick'>DELIVERY: {restaurantData.delivery} Kd</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="res-card">
                        {restaurantData.data == undefined ? <h3 className='warnning'>No data Found</h3> : restaurantData.data.map((each) => {
                            return <>
                                <div className='category_box'><h5 className='profile_title'><b>{each.category_name}</b></h5><span className='category_btn'><i class="fa fa-sort-up"></i></span></div>
                                <hr />
                                <div className='category_items'>
                                    {each.products.map((item) => {
                                        return <div className="res-card mt-2 row items">

                                            <div className='product_pick col-lg-3'>
                                                <img src={`${env.URL}/dipicious/${item.image}`} />
                                            </div>
                                            <div className='col-lg-7'>
                                                <h5 className='profile_title'>{item.item_name}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className='col-lg-2 items-align-right row'>
                                                {item.quantity == undefined ?
                                                    <IconButton color="primary" aria-label="add to shopping cart">
                                                        <CustomCart
                                                            user_id={user_id}
                                                            lang={lang}
                                                            access_token={access_token}
                                                            restaurant_id={each.restaurant_id}
                                                            food_item_id={item.food_item_id}
                                                            quantity={item.quantity}
                                                            description={item.description}
                                                             />
                                                    </IconButton> :
                                                    <div class="quantity">
                                                        <a href="#" class="quantity__minus"><span>-</span></a>
                                                        <input name="quantity" type="text" class="quantity__input" value={item.quantity} />
                                                        <a href="#" class="quantity__plus" onClick={() => dispatch(increment(item.food_item_id))}><span>+</span></a>
                                                    </div>
                                                }



                                            </div>
                                        </div>
                                    })}


                                </div>
                            </>
                        })}

                    </div>

                </div>
            </div>
        </div>

    </>)
}
export default Order