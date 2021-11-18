import React from "react";
import { Button } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import PerfactScroll from 'react-perfect-scrollbar'
const Profile = () => {
  return (
    <div className='row main-profile'>
      <div className='col-lg-8 col-sm-12 m-auto profile-div '>
        <div className='row '>
          <div className='col-lg-4 col-4 m-auto followers order-2'>
            <h4>66</h4>
            <h6>following</h6>
            {/* <button className='profile_btn  btn-primary mt-5'>EDIT PROFILE</button> */}
            <Button variant="outlined" className='mt-5 profile_btn'>EDIT PROFILE</Button>
          </div>
          <div className='col-lg-4 col-4'>
            <div className='main-profile-pick m-auto'>
              <img src='https://tse2.mm.bing.net/th?id=OIP.CB2zgi8ckKgo9OTzuI63ygHaJW&pid=Api&P=0&w=300&h=300' alt='profile..'></img>
            </div>
            <h3 className='m-auto profile_title ' style={{ textAlign: 'center' }}>Depicios</h3>
          </div>
          <div className='col-lg-4 col-4 m-auto following'>
            <h4>66</h4>
            <h6>followers</h6>
            <Button variant="contained" className='mt-5 profile_btn'>BECOME A CHEF</Button>
          </div>
        </div>
        <div className='row profile_links'>
          <div className='col-md-11'>
            <span>dipicious@dipicious</span><br />
            <span>Dipicios official account!</span><br />
            <NavLink to='#' className='links'>https://xyz.com</NavLink>
            <span></span>

          </div>
        </div>

      </div>
      <br />
      <div className='col-md-8 col-sm-12 m-auto profile_post_container'>
        <div className="row ">
          <div className='col-md-3 col-3'><b>16 Activities</b></div>
          <div className='col-md-3 col-3'><b>18 Favriate</b></div>
          <div className='col-md-3 col-3'><b>26 Reviews</b></div>
          <div className='col-md-3 col-3'><b>126 points</b></div>
        </div>
        <div className='row post_container'>
    
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
        
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
         
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
         
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
         
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>

          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
         
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"
           
              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>


        </div>


      </div>
    </div>
  )
}
export default Profile