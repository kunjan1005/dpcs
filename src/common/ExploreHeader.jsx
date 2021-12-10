import React, { useEffect } from "react";
import Restaurant from '@material-ui/icons/Restaurant'
import List from '@material-ui/icons/ListAlt'
import Map from '@material-ui/icons/Map'
import MenuBook from '@material-ui/icons/MenuBook'
import { NavLink } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import env from "../env";
import { isUserLoging } from "../authorization/useAuth";
import { fatchRetaurant ,paginatedData} from "../actions";
import { useDispatch } from "react-redux";

const ExploreHeader=()=>{
  let dispatch=useDispatch()
  useEffect(async()=>{
     dispatch(fatchRetaurant())
    
     return ()=>{}
  })
  return (
       <div className='container explore_main '>
         <div className='explore_header m-auto'>
           <ul className='explore_links row'>
             <li className='col-lg-3 col-1'>
               <Tooltip title='CUISINES'>
               <NavLink to='#cuisines' className='links' activeclass='active'><Restaurant/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='LIST'>
               <NavLink to='#list' className='links' activeclass='active'><List/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='MAP'>
               <NavLink to='#map' className='links' activeclass='active'><Map/></NavLink>
               </Tooltip>
               </li>
             <li className='col-lg-3 col-1'>
               <Tooltip title='RECIPE'>
               <NavLink  to='#recipe' className='links' activeclass='active'><MenuBook/></NavLink>
               </Tooltip>
               </li>
           </ul>

         </div>
       </div>
       )
}
export default ExploreHeader