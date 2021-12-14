import React from "react";
import ExploreHeader from "../common/ExploreHeader";
import { contentShow, contentHide } from '../actions/index'
import { Route, Routes, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import Cuisines from "./Cuisines";
import  List  from "./List";
import Map from './Map'
import Recipe from './Recipe'
const Explore = () => {
  const location=useLocation()
  let tabindex=location.hash.split('#')[1]

  return (<>
    <ExploreHeader />
    <div className='container-fluid '>
      <div className='row'>
        <div className='explore_card m-auto'>
  
          {tabindex=='cuisines'?<Cuisines/>:false}
          {tabindex=='list'?<List/>:false}
          {tabindex=='map'?<Map/>:false}
          {tabindex=='recipe'?<Recipe/>:false}
         
        </div>
      </div>
    </div>
  </>
  )
}
export default Explore