import React, { useEffect } from "react";
import Restaurant from '@material-ui/icons/Restaurant'
import List from '@material-ui/icons/ListAlt'
import Map from '@material-ui/icons/Map'
import MenuBook from '@material-ui/icons/MenuBook'
import { NavLink } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import Dipin from '@material-ui/icons/LocationOnRounded'
import CampaignIcon from '@material-ui/icons/VoiceChatRounded';
import FavIcon from '@material-ui/icons/StarBorderRounded';
import AddRestaurant from '@material-ui/icons/RestaurantRounded'

import env from "../env";
import { useDispatch } from "react-redux";

const ExploreHeader=()=>{
//   let dispatch=useDispatch()
//   useEffect(async()=>{
//      dispatch(fatchRetaurant())
    
//      return ()=>{}
//   })
  return (
       <div className='container explore_main '>
         <div className='explore_header m-auto'>
           <ul className='explore_links row'>
             <li className='col-lg-3 col-1'>
               <Tooltip title='DIP IN'>
               <NavLink to='#dipin' className='links' activeclass='active'><Dipin/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='DIP OUT'>
               <NavLink to='#dipout' className='links' activeclass='active'><CampaignIcon/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='REVIEW'>
               <NavLink to='#review' className='links' activeclass='active'><FavIcon/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='ADD RESTAURANT'>
               <NavLink  to='#restaurant' className='links' activeclass='active'><AddRestaurant/></NavLink>
               </Tooltip>
               </li>
           </ul>

         </div>
       </div>
       )
}
export default ExploreHeader