import React from "react";
import { Button } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import PerfactScroll from 'react-perfect-scrollbar'
const Profile = () => {
  return (
    <div className='row main-profile'>
      <div className='col-lg-8 col-sm-12 m-auto profile-div'>
        <div className='row '>
          <div className='col-lg-4 col-6 m-auto followers'>
            <h4>66</h4>
            <h6>following</h6>
            {/* <button className='profile_btn  btn-primary mt-5'>EDIT PROFILE</button> */}
            <Button variant="outlined" className='mt-5'>EDIT PROFILE</Button>
          </div>
          <div className='col-lg-4 col-12'>
            <div className='main-profile-pick m-auto'>
              <img src='https://tse2.mm.bing.net/th?id=OIP.CB2zgi8ckKgo9OTzuI63ygHaJW&pid=Api&P=0&w=300&h=300' alt='profile..'></img>
            </div>
            <h3 className='m-auto profile_title ' style={{ textAlign: 'center' }}>Depicios</h3>
          </div>
          <div className='col-lg-4 col-6 m-auto following'>
            <h4>66</h4>
            <h6>followers</h6>
            <Button variant="contained" className='mt-5'>BECOME A CHEF</Button>
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
      <br/>
      <div className='col-md-8 col-sm-12 m-auto profile_post_container'>
      <div className="row ">
          <div className='col-md-3'><b>16 Activities</b></div>
          <div className='col-md-3'><b>18 Favriate</b></div>
          <div className='col-md-3'><b>26 Reviews</b></div>
          <div className='col-md-3'><b>126 points</b></div>
        </div>
        <div className='row post_container'>
    
          <div className='col-md-4 col-sm-6 post_box mt-1'><img src='https://tse3.explicit.bing.net/th?id=OIP.i42NQwEseOgLA5-l0RzO_QHaE8&pid=Api&P=0&w=255&h=171' alt='profile post'></img></div>
          <div className='col-md-4 col-sm-6 post_box mt-1'><img src='https://tse3.mm.bing.net/th?id=OIP.99WLVIbEuWr0LAHPLq6CygHaE8&pid=Api&P=0&w=255&h=171' alt='profile post'></img></div>
          <div className='col-md-4 col-md-6 post_box mt-1'><img src='https://tse2.mm.bing.net/th?id=OIP.fBeq07iWoPekUmyxH74JkwHaE7&pid=Api&P=0&w=255&h=171' alt='profile post'></img></div>
     

        </div>


      </div>
    </div>
  )
}
export default Profile