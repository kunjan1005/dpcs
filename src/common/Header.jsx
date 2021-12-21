import React,{useEffect,useState} from 'react'
import logo from '../images/dpcs_logo.png'
import home from '../images/home.png'
import HomeIcone from '@material-ui/icons/HomeOutlined';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRunOutlined';
import  TouchAppIcon from '@material-ui/icons/TouchAppOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Profile from '@material-ui/icons/PersonOutlineOutlined'
import { NavLink } from 'react-router-dom'
import {getProfile} from '../actions/index'
import { useSelector,useDispatch } from "react-redux";
import { isUserLoging } from '../authorization/useAuth';
import * as rdd from 'react-device-detect'

// import Custominput from '../custom/CustomInput'
const Header = () => {
     let [isLogin,setLogin]=useState(false)
     let [curUser,setUser]=useState({})
    useEffect(()=>{
        let {login,user}=isUserLoging()
        setLogin(login)
        setUser(user)
      
    },[1])
    // console.log(rdd)
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
                                    <input type="search" id="" className="search_input"/>

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
                                            <img src={home}/>
                                            </div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='explore'>
                                        <NavLink className='links' activeclass='active' to='/explore#cuisines'><div className="wishlist_icon">
                                            <ExploreOutlined  className='header_btn'/>
                                            </div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='dip'>
                                        <NavLink className='links' activeclass='active' to='/dip#dipin'><div className="wishlist_icon"><TouchAppIcon  className='header_btn' /></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='notifications'>
                                        <NavLink className='links' activeclass='active' to='/activities'><div className="wishlist_icon"><DirectionsRunIcon  className='header_btn'/></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='profile'>
                                        <NavLink className='links' activeclass='active' to='/profile'><div className="wishlist_icon"><Profile  className='header_btn'   /></div></NavLink>
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