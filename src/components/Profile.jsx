import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import ProfileSetting from "../custom/ProfileSetting";
import _ from 'underscore'
import { isUserLoging } from "../authorization/useAuth";
import ProfileTabContainer from "./ProfileTabContainer";
import env from '../env'
import axios from 'axios'
import { toast } from "react-toastify";
import { follower_list, following_list, 
         storefollowersAndFollowingList, storeOtherUserProfile, 
         storeUserProfile,friend_request_list} from "../actions";
import Shimmer from 'react-js-loading-shimmer';
import Following from "../custom/Following";
import Followers from "../custom/Followers";
import FriendRequiestList from "../custom/FriendRequiestList";
const Profile = () => {
  let [show, setShow] = useState(true);
  let [following,showFollowing]=useState(false);
  let location = useLocation()
  let tabindex = location.hash.split('#')[1]
  let search = location.search
  let other_user_id = search.split('=')[1]
  let state = useSelector((state) => state.userReducer)
  let user = state.data
  let response = isUserLoging()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  useEffect(async () => {
    dispatch(storefollowersAndFollowingList())
    if (response.login) {
      if (other_user_id == response.user.user_id) {
        dispatch(storeUserProfile())
      }
      else if (other_user_id != undefined) {
        // alert(other_user_id)
        dispatch(storeOtherUserProfile(other_user_id))

      } else {
        dispatch(storeUserProfile())
      }
    } else {
      navigate('/login')
    }
    return () => {
      user = {}
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
  const changeUserStatus=async(status)=>{
    let data = isUserLoging()
    let { user_id, lang, access_token } = data.user
    let jsonData = JSON.stringify({ user_id, lang, access_token,status})
    let response = await axios.post(`${env.URL}/dipicious/api/user/change_status_user`, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic cm9vdDoxMjM='
      }
    })
    if (response.data.flag == 1) {
      toast.success(response.data.msg)
      dispatch(storeUserProfile())
    }
  }
  const followUnfollowStatus=async(opp_user_id)=>{
    let data = isUserLoging()
    let { user_id, lang, access_token } = data.user
    let jsonData = JSON.stringify({ user_id, lang, access_token,opp_user_id})
    let response = await axios.post(`${env.URL}/dipicious/api/user/unfollow_post`, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic cm9vdDoxMjM='
      }
    })
    if (response.data.flag == 1) {
      toast.success(response.data.msg)
      if(response.user.user_id==user.user_id){
        dispatch(storeUserProfile())
      }else{
        dispatch(storeOtherUserProfile(user.user_id))
      }

    }
  }
  return (
    <>
      {/* {show? */}
      <ProfileSetting close={setShow} />
      <Following close={showFollowing} other_user_id={response.user.user_id==user.user_id?"":user.user_id}/>
      <Followers close={showFollowing}/>
      <FriendRequiestList close={showFollowing}/>
      <div className='row main-profile'>
        <div className='card col-lg-8 col-sm-12 m-auto profile-div mt-3'>

          <div className='row '>
            <div className='logout'>
             { response.user.user_id==user.user_id?<><div className="dropdown float-left">
                <button className="btn btn-default border dropdown-toggle" type="button" data-toggle="dropdown">
                  <span className="caret"> Profile </span></button>
                <ul className="dropdown-menu">
                  <li className="text-center" onClick={()=>{changeUserStatus(1)}}><p>{user.status==1?<i class="fas fa-circle" style={{color:"green"}}></i>:""} Online</p></li>
                  <li className="text-center" onClick={()=>{changeUserStatus(2)}}><p>{user.status==2?<i class="fas fa-circle" style={{color:"red"}}></i>:""} Offline</p></li>
                  <li className="text-center" onClick={()=>{changeUserStatus(3)}}><p>{user.status==3?<i class="fas fa-circle" style={{color:"orange"}}></i>:""} Away</p></li>
                </ul>
              </div>
              <div className="dropdown float-left ml-3">
                <button className="btn btn-default border" type="button" data-toggle="modal" data-target="#myModal5" 
                onClick={()=>dispatch(friend_request_list())}>
                  <i class="fas fa-user-plus"></i>
                </button>
              </div>

              <div className="float-right">
                <button className="btn border" onClick={() => setShow(true)} data-toggle="modal" data-target="#myModal2"><i className="fa fa-user-cog"></i></button>
                {/* <button className="btn btn-default border dropdown-toggle" type="button" data-toggle="dropdown"><i className="fa fa-user-cog"></i>
                <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li className="text-center"><NavLink to='/logout'><p>Logout</p></NavLink></li>
                <li className="text-center"><NavLink to="/restaurant/myorders"><p>Orders</p></NavLink></li>
                <li className="text-center"><NavLink to="/restaurant/booking"><p>Table Reservations</p></NavLink></li>
              </ul> */}
              </div>
              </>:""}
            </div>
            <div className='col-lg-4 col-4 m-auto followers order-1'>
              <h4 data-toggle="modal" data-target="#myModal3" onClick={()=>user.user_id==response.user.user_id?dispatch(following_list()):dispatch(following_list(10,user.user_id))}>{_.isEmpty(user) ? <Shimmer /> : user.following_count}</h4>
              <h6>following</h6>
              {/* <button className='profile_btn  btn-primary mt-5'>EDIT PROFILE</button> */}
              {user.user_id==response.user.user_id?<NavLink to={`/profile/edit`}>
                <Button variant="outlined" className='mt-5 profile_btn'
                  style={{ backgroundColor: 'palevioletred', color: 'white', border: "none" }} data-id={user.user_id} >
                  EDIT PROFILE
                </Button>
              </NavLink>:<Button variant="outlined" className='mt-5 profile_btn'
                  style={{ backgroundColor: 'palevioletred', color: 'white', border: "none" }} data-id={user.user_id} >
                  {user.is_follow?'UNFOLLOW':"FOLLOW"}
                </Button>}
            </div>
            <div className='col-lg-4 col-4 order-2'>
              <div className='main-profile-pick m-auto'>
                {_.isEmpty(user) ? <Shimmer /> : <img src={`${env.URL}/dipicious/${user.user_profile_pic}`} alt='profile..'></img>}
              </div>
              <h6 className='m-auto profile_title ' style={{ textAlign: 'center' }}>{_.isEmpty(user) ? <Shimmer /> :
             <>{user.status==1?<i class="fas fa-circle" style={{color:"green"}}></i>:user.status==2?<i class="fas fa-circle" style={{color:"red"}}/>:<i class="fas fa-circle" style={{color:"orange"}}/>}{user.name}</>}</h6>
               {!user.user_id==response.user.user_id?<Button variant='outlined' className='profile_btn m-auto'>BLOCK</Button>:""} 
            </div>
            <div className='col-lg-4 col-4 m-auto following order-3'>
              <h4 data-toggle="modal" data-target="#myModal4" onClick={()=>dispatch(follower_list())}>{_.isEmpty(user) ? <Shimmer /> : user.followers}</h4>
              <h6>followers</h6>
              {user.user_id==response.user.user_id?
              <Button variant="outlined" className='mt-5 profile_btn'
                onClick={() => becomeChef()}
                style={{ backgroundColor: 'orange', color: 'white', border: "none" }}>BECOME A CHEF</Button>:
                <Button variant="outlined" className='mt-5 profile_btn'
                onClick={() => becomeChef()}
                style={{ backgroundColor: 'orange', color: 'white', border: "none" }}>CHAT</Button>}
            </div>
          </div>
          {/* <div className='row profile_links'>
            <div className='col-md-12'>
              <span></span><br />
              <span>{user.description}</span><br />
              <NavLink to='#' className='links'>{_.isEmpty(user) ? <Shimmer /> : user.website}</NavLink>
              <span></span>

            </div>
          </div> */}
        </div>
        <br />
        <ProfileTabContainer other_user_id={other_user_id} />
      </div>
    </>
  )
}


export default Profile