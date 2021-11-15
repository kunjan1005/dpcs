import React from 'react'
import { NavLink } from 'react-router-dom'
import Exit from '@material-ui/icons/Clear'

const Singup = () => {
    return (
        <>
              <div className='container-fluid user_container'>
      <div className="card m-auto " style={{ height: "35rem", padding: "2rem" }}>
          <div className='exit_button justify-content-end' ><Exit /></div>
          <img src="dpcs_app/public/images/img_logo.png" className='login_card_img' alt="" />
            <h3 className='m-auto login-title'>Sing up Here</h3>
            <div className="card-body p-2">
                <form>
                    <div className="mb-1">
                        <input type="number" className="form-control" id=""  placeholder='Mobile No' />
                    </div>
                    <div className="mb-1">
                        <input type="text" className="form-control" id=""  placeholder='fullname' />
                    </div>
                    <div className="mb-1">
                        <input type="text" className="form-control" id=""  placeholder='user name' />
                    </div>
                    <div className="mb-1">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' />
                    </div>
                    <div className="mb-1">
                        <select name="language" id=""  className="form-control">
                            <option value='english' selected disabled>Select language</option>
                            <option value='english'>english</option>
                            <option value='hindi'>hindi</option>
                            <option value='spenisg'>spenish</option>
                        </select>
                    </div>
                    <div className="mb-1">
                        <select name="gender" id=""  className="form-control">
                            <option value='english' selected disabled>Select gender</option>
                            <option value='male'>male</option>
                            <option value='female'>female</option>
                            <option value='other'>other</option>
                        </select>
                    </div>
                    <div className="mb-1 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-danger login_btn">Sign up</button>
                    <div className='m-auto'>
                         <span className='policy_paragraph'>By Singing up.you agree to our Terms.Data Policy and Cookies Policy</span><br/>
                         <span className='policy_paragraph'><b>already have account?<NavLink to='/login' className='links' id=''>Login</NavLink></b></span><br/>
                         
                    </div>
                </form>

            </div>
            </div>
            </div>
        </>
    )
}
export default Singup