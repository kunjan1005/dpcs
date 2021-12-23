import React from 'react' 
import { NavLink } from 'react-router-dom'
import env from '../env'

const Favriate=(props)=>{
    return (<>
    {props.data.map((each)=>{
        return <div className='col-lg-12 col-12 border p-3' style={{backgroundColor:'white'}}>
        <div className='col-lg-3 col-6 border'>
        <p style={{float:'right',
                   position:"absolute",
                   zIndex:99,
                   color:'white',
                   backgroundColor:'green'}}>{each.feedback}</p>
            <NavLink to={`/restaurant/${each.restaurant_id}`}><div className='m-auto' style={{height:"50%",width:'80%'}}>
                <img src={`${env.URL}/dipicious/${each.image_url}`}  style={{height:"100%",width:'100%'}}/>
            </div>
            </NavLink>
            <div className='mt-1 p-1'>
            <NavLink to={`/restaurant/${each.restaurant_id}`}>
                <h6 className='profile_title'>{each.restaurant_name}</h6>
            </NavLink>
              <p className='sub-title'>{each.cuisine}</p>
              <div className="d-flex justify-content-around">
                  {each.is_open==1?<span style={{margin:'auto',color:'green'}}><b>Open</b></span>:<span style={{color:'red'}}><b>Close</b></span>}
                  <span style={{margin:'auto'}}>{Math.round(each.distance)} KM</span></div>
             </div>
        </div>
    </div>
    })}
    
    </>)
}
export default Favriate