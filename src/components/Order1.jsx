import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import env from '../env'
import { IconButton } from '@material-ui/core'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loading from '../common/Loading'
import { DoneIcon } from '@material-ui/icons/Done';
import { restaurantOrderDetails, cartData } from '../actions/index'
import CustomCart from '../custom/CartForm';
import Shimmer from 'react-js-loading-shimmer'

import _ from 'underscore'
import foodImg from '../images/placeholder.svg'
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

const Order1 = () => {
    let { user } = isUserLoging()
    let { user_id, lang, access_token } = user
    let location = useLocation()
    let [restaurant, setRestaurant] = useState({})
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    let restaurant_id = useParams('sid')
    let navigate = useNavigate()
    let state = useSelector((state) => state.restaurantOrderReducer)
    let restaurantData = state.restaurantOrderDetails
    useEffect(() => {
        // setTimeout(() => {
        //     dispatch(restaurantOrderDetails(restaurantData.cart_restaurant_id))
        //     dispatch(cartData(restaurantData.cart_restaurant_id))
        // }, 900)
    }, [1])

    return (
        <div className='mainClass'>
            <div className='container'>
                <div className='row firstimg'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-12'>
                        {_.isEmpty(restaurantData) ? <Shimmer /> : <img src={`${env.URL}/dipicious/${restaurantData.restautant_image}`} className='img1'></img>}
                    </div>

                    <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                        <h1>{_.isEmpty(restaurantData) ? <Shimmer /> : restaurantData.restaurant_name}</h1>
                        <p>{restaurantData.avg} min<span></span> {restaurantData.min} Kd ·<span></span>{restaurantData.delivery} Kd</p>

                        <p>{
                            _.isEmpty(restaurantData) ? <Shimmer /> :
                                <><svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-ed34b65f78f16205" fill="#d31f33"><path d="M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z"></path></svg>
                                    <span> 4.3 Very good</span> · <span> (500+)</span> · <span> 10.73 km away</span> · <span> Free delivery</span> · <span> KD 3.500</span> <span style={{ marginLeft: '27px' }}>minimum</span></>
                        }</p>


                        <p>
                            {_.isEmpty(restaurantData) ? <Shimmer /> :
                                <><svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-abe5c41af1b9498e ccl-1e6f880f67285c2e" fill="#d31f33"><path d="M18 17.5C18 18.3272 18.6729 19 19.5 19C20.3271 19 21 18.3272 21 17.5C21 16.6729 20.3271 16 19.5 16C18.6729 16 18 16.6729 18 17.5ZM5.3 15H10.4L9.4 11.2C7.51643 11.7024 5.96055 13.1418 5.3 15ZM6 17C6 18.1028 6.89717 19 8 19C9.10283 19 10 18.1028 10 17H6ZM10 9H11.1L12.5 15H17.1C17.2812 14.7495 17.5412 14.5548 17.8 14.4L15.9 7H17.9L18.3172 8.53691C18.5665 8.20869 18.9409 8 19.3594 8H21V11H19.3594C19.2236 11 19.0924 10.978 18.9686 10.9371L19.8 14C21.584 14.1289 23 15.6407 23 17.5C23 19.4266 21.433 21 19.5 21C17.567 21 16 19.4266 16 17.5C16 17.3151 16.0127 17.1476 16 17H12C12 19.1983 10.2056 21 8 21C5.79442 21 4 19.1983 4 17H3C3 14.5841 4.04808 12.4308 5.7 11H3L2 10V4L3 3H9L10 4V9Z"></path></svg>
                                    <span> Delivered by {restaurantData.restaurant_name} This</span><span style={{ marginLeft: '20px' }}>means you won’t be able to follow your order or get live updates</span></>
                            }</p>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                        <p className='text-right'>
                            <img src="https://img.icons8.com/color/50/000000/cycling-road--v1.png" />
                            <span> Deliver in around 25 min</span>

                        </p>
                    </div>
                </div>
            </div>
            <hr />

            <div class="col-sm-12" id="spy">
                <ul class="nav nav-pills">
                    {_.isEmpty(restaurantData) ? <Shimmer /> :_.isEmpty(restaurantData.data) ? <span>no data found</span> : restaurantData.data.map((each, index) => {
                        return <li class="nav-item"><a class="nav-link" href={`#scroll${index + 1}`}>{each.category_name}</a></li>
                    })
                    }
                </ul>
            </div>

            <div className='row'>
                <div class="col-sm-7 scrollspy-example" data-spy="scroll" data-target="#spy">
                    {  _.isEmpty(restaurantData) ? <Shimmer /> :_.isEmpty(restaurantData.data) ? <span>no data found</span> : restaurantData.data.map((each, index) => {
                        return <div id={`scroll${index + 1}`}>
                            <h2>{each.category_name}</h2>
                            {each.products.map((item, index) => {
                                return <div className='div1'>
                                    <div className='row'>
                                        <div className='col-sm-9'>
                                            <p style={{ fontSize: '16px' }}>Success Meal {item.item_name}</p>
                                            <p>Kd {item.item_price},</p>
                                            <p>{item.description}</p>
                                            {item.cart_id == undefined ?
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                    <CustomCart
                                                        user_id={user_id}
                                                        lang={lang}
                                                        access_token={access_token}
                                                        restaurant_id={each.restaurant_id}
                                                        food_item_id={item.food_item_id}
                                                        quantity={item.quantity == undefined ? 1 : item.quantity}
                                                        description={item.description}
                                                        quantity_increment_decrement={item.quantity == undefined ? 1 : item.quantity}
                                                        redirectTo={() => { dispatch(restaurantOrderDetails(restaurant_id.sid)) }}
                                                    />
                                                </IconButton> : <div className='cart_success'>Cart <i class="fa fa-check-circle"></i></div>

                                            }
                                        </div>
                                        <div className='col-sm-3'>
                                            <img src={`${env.URL}/dipicious/${item.image}`} className='imgsection' />
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                    })}


                </div>

                <div className='col-sm-5'>
                    <div className='div2'>
                        <svg height="90" width="90" viewBox="0 0 24 24" class="img-basket"><path d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z"></path></svg>
                        <br />
                        {_.isEmpty(restaurantData) ? <Shimmer /> :restaurantData.cart_total != null ? <p className='text-center'>Your basket is empty</p> : <>
                            <p className='text-center'>Total Items: {restaurantData.cart_count}</p>
                            <p className='text-center'>Total Price: Kd {restaurantData.cart_total}</p>
                        </>
                        }
                        <br />
                        {_.isEmpty(restaurantData) ? <Shimmer /> :restaurantData.cart_total != null ? <NavLink to={`/restaurant/cart/${restaurantData.cart_restaurant_name}`} >
                            <button type="button" class="btn-btn-btn-open" tabindex="0"><span class="">Go to checkout</span></button></NavLink> :
                            <button type="button" class="btn-btn-btn-disabled" tabindex="0"><span class="">Go to checkout</span></button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order1