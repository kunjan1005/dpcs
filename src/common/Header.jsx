import React, { useEffect, useState } from 'react'
import logo from '../images/dpcs_logo.png'
import home from '../images/icon/home.png'
import explore from '../images/icon/explore.png'
import bell from '../images/icon/notify.png'
import add from '../images/icon/add.png'
import user from '../images/icon/profile.png'
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom'
import { getProfile } from '../actions/index'
import { useSelector, useDispatch } from "react-redux";
import { isUserLoging } from '../authorization/useAuth';
import * as rdd from 'react-device-detect'
import onappRedirect from "../authorization/redirectApplication";
import { toast } from 'react-toastify'
import axios from 'axios'
import env from '../env'
// import Custominput from '../custom/CustomInput'
const Header = () => {
    let [isLogin, setLogin] = useState(false)
    let [curUser, setUser] = useState({})
    let [size, setSize] = useState(window.screen.width)
    useEffect(() => {
        let { login, user } = isUserLoging()
        setLogin(login)
        setUser(user)

    }, [1])
    window.addEventListener('resize', () => {
        let size = window.screen.width
        setSize(size)
    })

    //this is on search evet and for search global post and personal post and restauratn on the header
    const onChangeEvent = async (e) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, search: e.target.value })
        let response = await axios.post(`${env.URL}/dipicious/api/user/restaurant_search`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        console.log(response)
        if (response.data.flag == 0) {
            // toast.success(response.data.msg)
        }
    }



    return (
        <header className="header">
            <div className="header_main">
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-lg-1 col-sm-2 col-2 order-1 logo-div">
                            <div className="logo_container">
                                <div className="logo"><img src={logo} alt="logo" /></div>
                            </div>
                        </div>
                        <div className="offset-2 col-lg-3 col-sm-2 col-2 order-1 logo-div header_search p-1">
                            <div className="logo_container">
                                <div className="serach_box">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    <input type="search" id="" className="search_input" placeholder='Search here' onChange={onChangeEvent} />

                                </div>
                                {/* <Custominput/> */}
                            </div>
                        </div>


                        <div className="col-lg-3 col-12 order-lg-3 order-1 offset-lg-1">
                            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end ">
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='home'>
                                        <NavLink className='links' activeclass='active' to='/'><div className="wishlist_icon">
                                            {/* <HomeIcone className='header_btn' /> */}
                                            <img src={home} />
                                        </div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">

                                    <Tooltip title='explore'>
                                        <NavLink className='links' activeclass='active' to='#' onClick={() => {
                                            onappRedirect()
                                            // toast.warn('Download Application for full user Experience', { position: 'top-center' })
                                        }}>
                                            <div className="wishlist_icon">

                                                <img src={explore} />
                                            </div>
                                        </NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='dip'>
                                        <NavLink className='links' activeclass='active' to='#'
                                            onClick={() => {
                                                onappRedirect()
                                                // toast.warn('Download Application for full user Experience', { position: 'top-center' })
                                            }}><div className="wishlist_icon">
                                                {/* <TouchAppIcon className='header_btn' /> */}
                                                <img src={add} />
                                            </div>

                                        </NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='notifications'>
                                        <NavLink className='links' activeclass='active' to='#'
                                            onClick={() => {
                                                onappRedirect()
                                                // toast.warn('Download Application for full user Experience', { position: 'top-center' })
                                            }}>
                                            <div className="wishlist_icon">
                                                {/* <DirectionsRunIcon className='header_btn' /> */}
                                                <img src={bell} />
                                            </div>
                                        </NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='profile'>
                                        <NavLink className='links' activeclass='active' to='/profile#activities'>
                                            <div className="wishlist_icon">
                                                {/* <Profile className='header_btn' /> */}
                                                <img src={user} />
                                            </div>
                                        </NavLink>
                                    </Tooltip>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header