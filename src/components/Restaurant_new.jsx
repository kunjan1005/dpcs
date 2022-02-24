import React, { useEffect, useState, createContext } from 'react'
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import Active from '@material-ui/icons/FiberManualRecord'
import { NavLink } from 'react-router-dom'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import { Button } from '@material-ui/core'
import { LocalShippingOutlined, Call, Info } from '@material-ui/icons'
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
import Shimmer from 'react-js-loading-shimmer'
import InfoTab from '../restaurant_tabs/Info'
const Restaurant_new = () => {
    let [restaurant, setRestaurant] = useState({})
    let [showTab,setShowTab] = useState(-1);
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
    
                <div className="row no-gutters">
                    <div className="col-md-12 pr-2">
                        <div className="res-card">
                            <div className="demo">
                                <ul id="lightSlider">
                                    <li data-thumb=""> {_.isEmpty(restaurant)?<Shimmer/>:<img src={`${env.URL}/dipicious/${restaurant.image_restaurant[0].image_url}`} />} </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="restaurant_tab">
                            <ul className="d-flex justify-content-between">
                                <li onClick={()=>setShowTab(0)} className={showTab==0?'active_restaurnt_tab':null}>INFO</li>
                                <li onClick={()=>setShowTab(1)} className={showTab==1?'active_restaurnt_tab':null}>DIP INS</li>
                                <li onClick={()=>setShowTab(2)} className={showTab==2?'active_restaurnt_tab':null}>REVIEWS</li>
                                <li onClick={()=>setShowTab(3)} className={showTab==3?'active_restaurnt_tab':null}>EVENTS</li>

                            </ul>
                        </div>
                        {showTab==0?<InfoTab restaurant={restaurant}/>: 
                        showTab==1?restaurantDipList.flag == 0 ? <h3 className='text-center'>No Dip in </h3> : <Post post={restaurantDipList.data} restaurant='1' />:
                        restaurantReviewList.flag == 0 ? <h3 className='text-center'>No Review </h3> : <Review data={restaurantReviewList.data} restaurant='1' restab='0' />}
                    </div>
                    
                </div>
         
            {/* {tabindex == 'dipin' ? <ModelForm /> : ""} */}
    </>)
}
export default Restaurant_new