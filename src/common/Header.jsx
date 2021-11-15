import React from 'react'
import HomeIcone from '@material-ui/icons/Home';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined'
import PlusOneRounded from '@material-ui/icons/PlusOneRounded'
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive'
import Profile from '@material-ui/icons/PersonOutline'
import {NavLink} from 'react-router-dom'

const Header=()=>{
   return(

  
    <header className="header">
        <div className="header_main">
            <div className="container">
                <div className="row">
               
                    <div className="col-lg-2 col-sm-2 col-3 order-1">
                        <div className="logo_container">
                            <div className="logo"><a href="#">BBB</a></div>
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
                    <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left">
                        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                               <NavLink to='/'><div className="wishlist_icon"><HomeIcone/></div></NavLink>
                               
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <div className="wishlist_icon"><ExploreOutlined/></div>
                               
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <div className="wishlist_icon"><PlusOneRounded/></div>
                               
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <div className="wishlist_icon"><NotificationsActiveIcon/></div>
                               
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-end m-3">
                                <div className="wishlist_icon"><Profile/></div>
                               
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