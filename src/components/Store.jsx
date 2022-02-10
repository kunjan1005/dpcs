import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import StoreProduct from "../common/StoreProduct";
import { useSelector, useDispatch } from "react-redux";
import {storeProducts} from '../actions'
import StorePoroductDetail from '../custom/StoreProductDetail'
import _ from "underscore";
const Store = () => {
    let [show,setShow]=useState(false);
    let state=useSelector(state=>state.storeProuctReducer)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(storeProducts())
    },[1])
    return (<>
        {show?<StorePoroductDetail close={setShow}/>:null}
        <div className="mb-5 container mt-3">
            <div className='row border bg-white'>
                <div className="col-lg-6 col-md-6 col-6">
                    <p className="total mt-3">Total Points</p>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <p className="points mt-3 text-right">{state.total_points}</p>
                </div>
            </div>
            <div className="row m-2 border bg-white">
                <div className="">
                    <h6 className="text-left mt-3">Things You Can Buy</h6>
                </div>
                <div className="">
                    <h6 className="text-center mt-3">List Empty</h6>
                </div>
                <p style={{ float: "left" }} ><NavLink to="#">See more</NavLink></p>
            </div>
            {!_.isEmpty(state.list)?state.list.map((item,index)=>{
                return <>
                 <div className="row m-2 border bg-white">
                <h6 className="mt-3">{item.name}</h6>
                <div className='row'>
                    <StoreProduct  data={item.products} open={setShow}/>
                    <p style={{ float: "right" }} className="text-center"><NavLink to="#">See more</NavLink></p>
                </div>
            </div>
                </>
            }):null}
        </div>
        </>
    )
}
export default Store;