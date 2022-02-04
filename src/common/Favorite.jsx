import React from 'react'
import { NavLink } from 'react-router-dom'
import env from '../env'
import _ from 'underscore'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleRestaurant,getReviewRestaurant,getDipinRestaurant} from '../actions/index'
import Shimmer from 'react-js-loading-shimmer'
const Favriate = (props) => {
    let [post, setPost] = useState([])
    let dispatch = useDispatch()
    setTimeout(()=>{setPost(props.data)},900)
    return (<>
        <div className='row border p-3 d-flex'>
            {post.map((each) => {
                return <><div className='border mr-1 favorite'>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                <div className='border mr-1 favorite' style={{width:'10rem'}}>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',
                        backgroundColor: 'green'
                    }}>{_.isEmpty(post)?<Shimmer/>:each.feedback == 0 ? "0.0" : each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_name}`} onClick={() => {
                          localStorage.setItem('restaurant',each.restaurant_id)
                    }}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                            <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                        </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{_.isEmpty(post)?<Shimmer/>:each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{_.isEmpty(post)?<Shimmer/>:each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
                
                </>
                

            })}
            
        </div>

    </>)
}
export default Favriate