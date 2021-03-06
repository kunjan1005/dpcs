import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import env from "../env";
import { useSelector } from 'react-redux';
import Shimmer from 'react-js-loading-shimmer';
import ReactStars from 'react-rating-stars-component';
import _ from 'underscore';
import axios from 'axios';
import { isUserLoging } from '../authorization/useAuth';
import { toast } from 'react-toastify';

const StoreProductDetail =(props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let state=useSelector(state=>state.storeProuctReducer)
    const makeOrder=async (address_id,product_point,product_id)=>{
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token,address_id,product_point,product_id })
        let response = await axios.post(`${env.URL}/dipicious/api/user/make_point_order`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        if(response.data.flag){
            toast.success('Order placed successfully..')
        }else{
            toast.error('Order not placed..')
        }
    }
    return (<>
        <div className="modal fade" id="myModal14" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content w-100">
                    <div className="modal-header">
                        <h4 className="modal-title">Product Detail</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body h-20">
                        <div className='row'>
                            <Slider {...settings} className="mt-1 col-lg-12 col-12"  style={{ height: "15rem" }}>
                                {state.data.images != undefined ? state.data.images.map((img) => {

                                    return <div className="wdt1" >
                                        <img className="card-img-top home-img" src={`${env.URL}/dipicious/${img.image_url}`} style={{ height: "15rem" }} />
                                    </div>
                                }) : <Shimmer className='card-img-top home-img' />}
                            </Slider>
                            <div className='col-lg-6 col-12 mt-5'>
                                <h6 className='profile_title'>{state.data.name}</h6>
                                <p>{state.data.category_name}</p>
                                <p>{state.data.point} ptr</p>
                
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <h6 className='profile_title'>Address</h6>
                            <p>{state.data.address_data?.address_name}</p>
                        </div>
                        <div className='row'>
                            <h6 className='profile_title'>Description</h6>
                             <p>{state.data.description}</p>
                        </div>
                        <div className='row'>
                            <button className='btn btn-danger' onClick={()=>{
                                makeOrder(state.data.address_data.address_id,state.data.point,state.data.product_id)}}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default StoreProductDetail;