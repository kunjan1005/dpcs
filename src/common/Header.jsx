import React from 'react'
import HomeIcone from '@material-ui/icons/Home';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined'
import PlusOneRounded from '@material-ui/icons/PlusOneRounded'
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive'
import Tooltip from '@material-ui/core/Tooltip';  
import Profile from '@material-ui/icons/PersonOutline'
import {NavLink} from 'react-router-dom'

const Header=()=>{
   return(

  
    <header className="header">
        <div className="header_main">
            <div className="container">
                <div className="row">
               
                    <div className="col-lg-2 col-sm-2 col-3 order-1 logo-div">
                        <div className="logo_container">
                            <div className="logo"><img src="./../public/imges/img_logo.png" alt="logo" /></div>
                        </div>
                    </div> 
                    <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                        <div className="header_search">
                            <div className="header_search_content">
                                <div className="header_search_form_container">
                                    <form action="#" className="header_search_form clearfix"> <input type="search" required="required" className="header_search_input" placeholder="Search for products..."/>
                                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt=""/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4 order-lg-3 order-1 ">
                        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <Tooltip title='home'>
                               <NavLink className='links' activeclass='active' to='/'><div className="wishlist_icon"><HomeIcone/></div></NavLink>
                                </Tooltip>
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <Tooltip title='explore'>
                                <NavLink className='links'  activeclass='active' to='/explore'><div className="wishlist_icon"><ExploreOutlined/></div></NavLink>
                                 </Tooltip>
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <Tooltip title='new post'>
                                <NavLink className='links'  activeclass='active' to='/post'><div className="wishlist_icon"><PlusOneRounded/></div></NavLink>
                                </Tooltip>
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <Tooltip title='notifications'>
                              <NavLink className='links'  activeclass='active' to='/notifications'><div className="wishlist_icon"><NotificationsActiveIcon/></div></NavLink>
                               </Tooltip>
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <Tooltip title='profile'>
                               <NavLink className='links'  activeclass='active' to='/profile'><div className="wishlist_icon"><Profile/></div></NavLink>
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