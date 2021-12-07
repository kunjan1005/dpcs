import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import _ from 'underscore'
import Login from "./Login";
import { isUserLoging } from "../authorization/useAuth";
const Profile = () => {
  let [user, setUser] = useState({})
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

  }, [user])

  if (_.isEmpty(user)) {
    return <Loading></Loading>
  }

  return (
    <div className='row main-profile mt-2'>
      <div className='card col-lg-8 col-sm-12 m-auto profile-div '>

        <div className='row '>
          <div className='logout'><NavLink to='/logout'><Button variant='outlined'><Logout /></Button></NavLink></div>
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

      <div className='col-lg-8 col-sm-12 m-auto profile_post_container'>
        <hr />
        <div className="row m-auto">
          <div className='col-md-3 col-3'><b>16 </b>ACTIVITIES</div>
          <div className='col-md-3 col-3'><b>18 </b>FAVRIATE</div>
          <div className='col-md-3 col-3'><b>26 </b>REVIEWS</div>
          <div className='col-md-3 col-3'><b>126 </b>POINTS</div>
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

// export default withAuthenticationRequired(Profile, {
//   onRedirecting: () => <Loading />,
// });
export default Profile