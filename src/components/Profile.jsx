import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import _ from 'underscore'
import { isUserLoging } from "../authorization/useAuth";
import ProfileTabContainer from "./ProfileTabContainer";
import env from '../env'
import axios from 'axios'
import { toast } from "react-toastify";
import { storefollowersAndFollowingList,storeUserProfile } from "../actions";
// import ProfileDropDown from "../custom/ProfiledropDown";
const Profile = () => {
  let [user, setUser] = useState({})
  let location = useLocation()
  let tabindex = location.hash.split('#')[1]
  let search = location.search
  let other_user_id = search.split('=')[1]
  let state = useSelector((state) => state.userReducer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  useEffect(async() => {
    dispatch(storefollowersAndFollowingList())

    let response = isUserLoging()
    if (response.login) {
      if (other_user_id == response.user.user_id) {
        dispatch(storeUserProfile())
        setTimeout(() => {
          setUser(state.data)
        }, 900)
      }else if(other_user_id==undefined) {
        dispatch(storeUserProfile())
        setTimeout(() => {
          setUser(state.data)
        }, 900)
      }else{
         // let followers = await axios.post(`${env.URL}/dipicious/api/user/user_id`, jsonData, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Basic cm9vdDoxMjM='
        //   }
        // })
      }
    } else {
      navigate('/login')
    }


  }, [1])
  const becomeChef = async () => {
    let data = isUserLoging()
    let { user_id, lang, access_token } = data.user
    let jsonData = JSON.stringify({ user_id, lang, access_token })
    let response = await axios.post(`${env.URL}/dipicious/api/user/became_chef`, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic cm9vdDoxMjM='
      }
    })
    if (response.data.flag == 0) {
      toast.success(response.data.msg)
    }
  }

  if (_.isEmpty(user)) {
    return <Loading></Loading>
  }

  return (
    <div className='row main-profile mt-3'>
      <div className='card col-lg-8 col-sm-12 m-auto profile-div '>

        <div className='row '>
          <div className='logout'>

            <div className="dropdown float-right">
              <button className="btn btn-default border dropdown-toggle" type="button" data-toggle="dropdown"><i className="fa fa-user-cog"></i>
                <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li className="text-center"><NavLink to='/logout'><p>Logout</p></NavLink></li>
                <li className="text-center"><NavLink to="/restaurant/myorders"><p>Orders</p></NavLink></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-4 m-auto followers order-1'>
            <h4>{user.following_count}</h4>
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
              <img src={`${env.URL}/dipicious/${user.user_profile_pic}`} alt='profile..'></img>
            </div>
            <h6 className='m-auto profile_title ' style={{ textAlign: 'center' }}>{user.name}</h6>
          </div>
          <div className='col-lg-4 col-4 m-auto following order-3'>
            <h4>{user.followers}</h4>
            <h6>followers</h6>
            <Button variant="outlined" className='mt-5 profile_btn'
              onClick={() => becomeChef()}
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