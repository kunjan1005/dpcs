import React from 'react'
import { NavLink } from 'react-router-dom'
import env from '../env'
import _  from 'underscore'
import { useState } from 'react'
import Loading from './Loading'
const Favriate = (props) => {
    let [post,setPost]=useState([])
    setTimeout(()=>{
    setPost(props.data)
    },1000)
    if(_.isEmpty(props.data)){
      return <Loading/>
    }
    return (<>
     <div className='col-lg-12 col-12 border p-3 row' style={{ backgroundColor: 'white' }}>
        {post.map((each) => {
            return <div className='border mr-1 favorite'>
                    <p style={{
                        float: 'right',
                        position: "absolute",
                        zIndex: 99,
                        color: 'white',

                        backgroundColor: 'green'
                    }}>{each.feedback==0?"0.0":each.feedback}</p>
                    <NavLink to={`/restaurant/${each.restaurant_id}`}><div className='m-auto' style={{ height: "50%", width: '100%' }}>
                        <img src={`${env.URL}/dipicious/${each.image_url}`} style={{ height: "100%", width: '100%' }} />
                    </div>
                    </NavLink>
                    <div className='mt-1'>
                        <NavLink to={`/restaurant/${each.restaurant_id}`}>
                            <h6 className='profile_title m-1'>{each.restaurant_name}</h6>
                        </NavLink>
                        <p className='sub-title'>{each.cuisine}</p>
                        <div className="d-flex justify-content-around m-1">
                            {each.is_open == 1 ? <span style={{ margin: 'auto', color: 'green' }}><b>Open</b></span> : <span style={{ color: 'red' }}><b>Close</b></span>}
                            <span style={{ margin: 'auto' }}>{Math.round(each.distance)} KM</span></div>
                    </div>
                </div>
         
        })}
    </div>

    </>)
}
export default Favriate