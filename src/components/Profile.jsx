import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import _ from 'underscore'
import Login from "./Login";
import axios from 'axios'
import env from '../env'
import { isUserLoging } from "../authorization/useAuth";
import Activity from "../common/Activity";
import ProfileTabContainer from "./ProfileTabContainer";
const Profile = () => {
  let [user, setUser] = useState({})
  let location = useLocation()
  let tabindex = location.hash.split('#')[1]
  let navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      let response = isUserLoging()
      if (response.login) {
        setUser(response.user)
      } else {
        navigate('/login')
      }
    }, 900)

  }, [0])

  if (_.isEmpty(user)) {
    return <Loading></Loading>
  }

  return (
    <div className='row main-profile mt-2'>
      <div className='card col-lg-8 col-sm-12 m-auto profile-div '>

        <div className='row '>
          <div className='logout'>
            <NavLink to='/logout'>
              <Button variant='outlined'><Logout /></Button>
            </NavLink>
            <div class="dropdown float-right">
              <button class="btn btn-default border dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-user-cog"></i>
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li className="text-center"><NavLink to='/logout'>
              <Button variant='outlined'><Logout /></Button>
            </NavLink></li>
                <li className="text-center"><a href="#">React Js</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-4 m-auto followers order-1'>
            <h4>{user.following ? 0 : 1}</h4>
            <h6>following</h6>
            {/* <button className='profile_btn  btn-primary mt-5'>EDIT PROFILE</button> */}
            <NavLink to={`/profile/edit`}>
              <Button variant="outlined" className='mt-5 profile_btn'
                style={{ backgroundColor: 'palevioletred', color: 'white', border: "none" }} data-id={user.user_id} >
                EDIT PROFILE
              </Button>
            </NavLink>
          </div>
          <div className='col-lg-4 col-4 order-2'>
            <div className='main-profile-pick m-auto'>
              <img src={user.profile_image} alt='profile..'></img>
            </div>
            <h6 className='m-auto profile_title ' style={{ textAlign: 'center' }}>{user.name}</h6>
          </div>
          <div className='col-lg-4 col-4 m-auto following order-3'>
            <h4>{user.followers}</h4>
            <h6>followers</h6>
            <Button variant="outlined" className='mt-5 profile_btn'
              style={{ backgroundColor: 'orange', color: 'white', border: "none" }}>BECOME A CHEF</Button>
          </div>
        </div>
        <div className='row profile_links'>
          <div className='col-md-12'>
            <span>dipicious@dipicious</span><br />
            <span>{user.description}</span><br />
            <NavLink to='#' className='links'>{user.website}</NavLink>
            <span></span>

          </div>
        </div>

      </div>
      <br />
      <ProfileTabContainer />
    </div>
  )
}


export default Profile