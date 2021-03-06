import React, { useEffect, useState, createContext } from 'react'
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import Active from '@material-ui/icons/FiberManualRecord'
import { NavLink } from 'react-router-dom'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import { Button } from '@material-ui/core'
import { LocalShippingOutlined, Call } from '@material-ui/icons'
import { TableHead, Paper, Table, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core'
import { Tooltip } from "@material-ui/core";
import env from '../env'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleRestaurant, fatchRetaurant, getRestaurantList,restaurantOrderDetails} from '../actions/index'
import Loading from '../common/Loading'
import _ from 'underscore'
import BookTable from './BookTable';
import DipinForm from '../custom/DipinForm';
import ResturantMap from '../custom/CustomMap'
import { getReviewRestaurant, getDipinRestaurant } from '../actions/index'
import Scrollbars from 'react-custom-scrollbars-2'
import Review from '../common/Review'
import Post from '../common/Post';
import SuccessModel from '../custom/SuccessModel';
import Shimmer from 'react-js-loading-shimmer'
let SetDipIn = createContext()
const Restaurant = () => {
    let [restaurant, setRestaurant] = useState({})
    let [open, setOpen] = useState(false)
    let [dip, setDip] = useState(false)
    let [success, showSucess] = useState(false)
    let location = useLocation()
    let tabindex = location.hash.split('#')[1]
    let dispatch = useDispatch()
    // let restaurant_id = useParams('sid')
    let state = useSelector((state) => state.restaurantReducer)
    let restaurantData = state.restaurant
    let { restaurantReviewList, restaurantDipList } = state
    let daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let today = new Date()
    let curreDay = today.getDay();
    let userData = isUserLoging()
    let restaurant_id=localStorage.getItem('restaurant')
    useEffect(() => {
        dispatch(getRestaurantList())
        dispatch(getSingleRestaurant(restaurant_id))
        dispatch(getReviewRestaurant(restaurant_id))
        dispatch(getDipinRestaurant(restaurant_id))

        return () => {
            setRestaurant({})
        }
    }, [1])
    const setFavroaite = (flag) => {
        let { user_id, lang, access_token } = userData.user
        axios.post(`${env.URL}/dipicious/api/user/user_like_restaurant`,
            JSON.stringify({ user_id, lang, access_token, restaurant_id: restaurant_id, flag }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch(getSingleRestaurant(restaurant_id))
        })

    }
    const onMapRedirect = (lng, lat) => {
        window.location.href = `https://maps.google.com?q=${lat},${lng}`
    }
    setTimeout(() => {
        setRestaurant(restaurantData)
    }, 900);
    // if (_.isEmpty(restaurant)) {
    //     return <Loading />
    // }
    return (<>
        {success ? <SuccessModel close={showSucess} /> : ''}
        <SetDipIn.Provider value={setDip}>
            <div className="container-fluid mt-2 mb-3">
                {open ? <BookTable img={restaurant.image_restaurant[0].image_url}
                    restaurant_id={restaurantData.restaurant_id}
                    state={setOpen} {...userData.user}
                    showSucess={showSucess} /> : ''}
                {dip ? <DipinForm restaurant_id={restaurantData.restaurant_id} /> : ""}
                <div className="row no-gutters">
                    <div className="col-md-5 pr-2">
                        <div className="res-card">
                            <div className="demo">
                                <ul id="lightSlider">
                                    <li data-thumb=""> {_.isEmpty(restaurant)?<Shimmer/>:<img src={`${env.URL}/dipicious/${restaurant.image_restaurant[0].image_url}`} />} </li>
                                </ul>
                            </div>
                        </div>
                        <div className="res-card mt-2">
                            <h6 className='profile_title'>Reviews</h6>
                            <div className="d-flex flex-row">
                                <div className='col-lg-6 col-6'>
                                    <span>Service</span>,&nbsp;
                                    <b>{_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.service_rate}</b>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value={_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.service_rate}
                                        activeColor="#ffd700"

                                    />
                                    <span>Food</span>,&nbsp;
                                    <b>{_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.food_rate}</b>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value={_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.food_rate}
                                        activeColor="#ffd700"

                                    />
                                </div>
                                <div className='co-lg-6 col-6'>
                                    <span>Ambiance</span>,&nbsp;
                                    <b>{_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.ambiance_rate}</b>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value={_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.ambiance_rate}
                                        activeColor="#ffd700"

                                    />
                                    <span>Noise Level</span>,&nbsp;
                                    <b>{_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.noise_level}</b>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value={_.isEmpty(restaurant)?<Shimmer/>:restaurantReviewList.noise_level}
                                        activeColor="#ffd700"

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="res-card mt-2">
                            <h6 className='profile_title'>Address</h6>
                            <div className="res-comment-section" style={{ width: "100%", height: "100%" }}>
                                 {_.isEmpty(restaurant)?<Shimmer/>:
                                <ResturantMap lat={restaurant.lattitude == undefined ? userData.user.lattitude : restaurant.locations[0].lat}
                                    lng={restaurant.logtitude == undefined ? userData.user.logtitude : restaurant.locations[0].lng} />}
                            </div>

                            <div className="res-comment-section">
                                <ul>
                                    {_.isEmpty(restaurant)?<Shimmer/>:restaurant.locations.map((each, index) => {
                                        return index <= 4 ? <li>
                                            <p>{each.location} <NavLink to='#' target='_blank' onClick={() => onMapRedirect(each.lng, each.lat)}>Get Directions</NavLink></p><hr />
                                        </li> : ''
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="res-card">
                            <div className="res-bout">
                                <h4><span className="font-weight-bold profile_title">{_.isEmpty(restaurant)?<Shimmer/>:restaurant.restaurant_name}</span></h4>
                                <h6 className="font-weight-bold">{_.isEmpty(restaurant)?<Shimmer/>:restaurant.username}</h6>
                            </div>
                            <div className="res-buttons">
                               <button className="btn btn-outline-danger btn-long res-cart" onClick={() => setDip(true)}>{_.isEmpty(restaurant)?<Shimmer/>:"DIP-IN"}</button>&nbsp;
                                <button className="btn btn-outline-danger btn-long buy" onClick={() => restaurant.is_fav ? setFavroaite(0) : setFavroaite(1)}>{_.isEmpty(restaurant)?<Shimmer/>:restaurant.is_fav ? "UN-FAVORITE" : "FAVORITE"}</button>
                                {restaurant.is_open == 1 ? <small ><Active style={{ width: "15px", color: "greenyellow" }} /><b>Open</b></small> : <small ><Active style={{ width: "15px", color: "red" }} /><b>Closed</b></small>}
                            </div>
                            <div className="res-product-description">
                                <div className="res-similar-products mt-3 d-flex flex-row">

                                    {restaurant.pickup_or_delivery == 1 ?
                                        <div className="res-card  p-1" >
                                            <div className="res-card-body">
                                                <Tooltip title='Delivery available'>
                                                   {_.isEmpty(restaurant)?<Shimmer/>:<a href={`tel:${restaurant.restaurant_phone}`}>  <Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<Call />}>Call</Button></a>}
                                                </Tooltip></div> </div> :
                                        <div className="res-card  p-1" >
                                            <div className="res-card-body">
                                                <Tooltip title='Delivery not available'>
                                                    {_.isEmpty(restaurant)?<Shimmer/>:<Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<RestaurantIcon />} disabled>Closed</Button>}
                                                </Tooltip></div></div>
                                    }
                                    {restaurant.is_online_order == 1 ?
                                        <div className="res-card  p-1" >
                                            <div className="res-card-body">
                                                {_.isEmpty(restaurant)?<Shimmer/>:<Tooltip title='online order'>
                                                    <NavLink to={`/restaurant/order/${restaurant.restaurant_name}`} onClick={()=>{
                                                          dispatch(restaurantOrderDetails(restaurant.restaurant_id))
                                                    }}><Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<LocalShippingOutlined />}>Order</Button></NavLink>
                                                </Tooltip>}</div></div> :
                                        <div className="res-card  p-1">
                                            <div className="res-card-body">
                                                {_.isEmpty(restaurant)?<Shimmer/>:<Tooltip title='offline order'>
                                                    <Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<LocalShippingOutlined />} disabled>Closed</Button>
                                                </Tooltip>}</div></div>}

                                    {restaurant.is_table_online == 1 ?
                                        <div className="res-card  p-1">
                                            <div className="res-card-body">
                                                {_.isEmpty(restaurant)?<Shimmer/>:<Tooltip title='table availabel'>
                                                    <Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<RestaurantIcon />} onClick={() => { setOpen(true) }}>Book Table</Button>
                                                </Tooltip>}</div></div> :
                                        <div className="res-card  p-1">
                                            <div className="res-card-body">
                                                {_.isEmpty(restaurant)?<Shimmer/>:<Tooltip title='offline table only'>
                                                    <Button className='res_btn' style={{ backgroundColor: 'lightgreen' }} variant="contained" startIcon={<RestaurantIcon />} disabled>Closed</Button>
                                                </Tooltip>}</div></div>}
                                </div>
                            </div>
                            <div className="res-card mt-2"> <span className='profile_title'><b>Cuisine</b></span>
                                <hr />
                                <div className="res-similar-products mt-2 d-flex flex-row">
                                    {_.isEmpty(restaurant)?<Shimmer/>:restaurant.cuisine.map((each) => {
                                        return <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                            <img src={`${env.URL}/dipicious/${each.icon}`} className="res-img" alt="..." />
                                            <div className="res-card-body">
                                                <small className="card-title">{each.name}</small>
                                            </div>
                                        </div>
                                    })}


                                </div>
                            </div>
                            <div className="res-card mt-2 row"> <span className='profile_title'><b>Restaurant type</b></span>
                                <hr />
                                <div className="res-similar-products mt-2 d-flex flex-row col-lg-6">
                                    {_.isEmpty(restaurant)?<Shimmer/>:restaurant.restaurant_type.map((each) => {
                                        return <div className="res-card  p-1" style={{ width: "3rem", marginRight: "10px" }}>
                                            <img src={`${env.URL}/dipicious/${each.icon}`} className="res-img" alt="..." />
                                            <div className="res-ard-body">
                                                <small className="card-title">{each.name}</small>
                                            </div>
                                        </div>
                                    })}


                                </div>
                                <div className="res-similar-products mt-2  col-lg-6">
                                    <ul style={{ fontSize: "10px", color: "#d31f33" }}>
                                        <li><b>AVERAGE TIME TO DELIVER</b><br /><span style={{ color: "grey" }}>{_.isEmpty(restaurant)?<Shimmer/>:restaurant.delivery_time_estimation} min</span></li>
                                        <li><b>MINIMUM ORDER</b>  <br /><span style={{ color: "grey" }}>KD {_.isEmpty(restaurant)?<Shimmer/>:restaurant.min_order_price}</span></li>
                                        <li><b>PAYMENT OPTIONS</b>  <br /><span style={{ color: "grey" }}>{_.isEmpty(restaurant)?<Shimmer/>:restaurant.disable_online_payment ? 'Closed' : 'Open'}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <hr />

                        </div>
                        <div className="res-card mt-2"> <span className='profile_title'><b>Restaurant Pictures</b></span>
                            <hr />
                            <div className="res-similar-products mt-2 d-flex flex-row">
                                {_.isEmpty(restaurant)?<Shimmer/>:restaurant.image_restaurant.map((each) => {
                                    return <div className="res-card  p-1" style={{ width: "9rem", marginRight: "3px" }}> <img src={`${env.URL}/dipicious/${each.image_url}`} className="res-img" alt="..." />

                                    </div>
                                })}

                            </div>
                        </div>
                        <div className="res-card mt-2"> <span className='profile_title'><b>Discounts</b></span>
                            <hr />
                            <div className="res-similar-products mt-2 d-flex flex-row">
                                {_.isEmpty(restaurant)?<Shimmer/>:restaurant.discount.length == 0 ? <h6>There is no discount/offers at this time</h6>
                                    :
                                    restaurant.discount.map((each) => { return <div className='discount'>{each.discount_name}</div> })}

                            </div>
                        </div>
                        <div className="res-card mt-2">
                            <span className='profile_title'><b>Opening Hours</b></span>
                            <hr />
                            <div className="res-product-description">

                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead style={{ backgroundColor: "#d31f33" }}>
                                            <TableRow  >
                                                <TableCell></TableCell>
                                                {_.isEmpty(restaurant)?<Shimmer/>:restaurant.hour_full_data.map((each, index) => {
                                                    return daysInWeek[index] == daysInWeek[curreDay] ? <TableCell style={{ fontSize: "15px", color: "white", fontWeight: "bolder" }}><Active style={{ width: "15px", color: "greenyellow" }} />{daysInWeek[index]}</TableCell> :
                                                        <TableCell style={{ fontSize: "15px", color: "white", fontWeight: "bolder" }}>{daysInWeek[index]}</TableCell>
                                                })}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow
                                                key=''
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">Morning</TableCell>
                                                {_.isEmpty(restaurant)?<Shimmer/>:restaurant.hour_full_data.map((each, index) => {
                                                    return <TableCell align="right" style={{ fontSize: "10px" }}>{each.strat_time_morning}-{each.end_time_morning}</TableCell>
                                                })}

                                            </TableRow>
                                            <TableRow
                                                key=''
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">Afternoon</TableCell>
                                                {_.isEmpty(restaurant)?<Shimmer/>:restaurant.hour_full_data.map((each) => {
                                                    return <TableCell align="right" style={{ fontSize: "10px" }}>{each.strat_time_afternoon}-{each.end_time_afternoon}</TableCell>
                                                })}

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>


                    </div>
                    <div className='res-card mt-2 d-flex'>
                        <div className='offset-1 col-lg-3 text-center'> <NavLink activeclass='tab-active' to='#dipin'><h6 className='mt-2'>Dip ins</h6></NavLink></div>
                        <div className='col-lg-3 text-center'><NavLink activeclass='tab-active' to='#review'><h6 className='mt-2'>Review</h6></NavLink></div>
                        <div className='col-lg-3 text-center'><NavLink activeclass='tab-active' to='#event'><h6 className='mt-2'>Events</h6></NavLink></div>

                    </div>
                    <div className='res-card'>
                        {tabindex == 'dipin' ? <div className=''>
                            {restaurantDipList.flag == 0 ? <h3 className='text-center'>No Dip in </h3> : <Post post={restaurantDipList.data} restaurant='1' />}
                        </div> : ''}
                        {tabindex == 'review' ? <div className=''>
                            {restaurantReviewList.flag == 0 ? <h3 className='text-center'>No Review </h3> : <Review data={restaurantReviewList.data} restaurant='1' restab='0' />}
                        </div> : ''}
                    </div>
                </div>
            </div>
            {/* {tabindex == 'dipin' ? <ModelForm /> : ""} */}
        </SetDipIn.Provider>
    </>)
}
export default Restaurant
export { SetDipIn }