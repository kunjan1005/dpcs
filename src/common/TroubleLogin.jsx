import React from "react";

const TroubleLogin = () => {
    return (
        <>
            <div className='container-fluid user_container'>
                <div className="card m-auto " style={{ height: "30rem", padding: "2rem" }}>
                    <div className='exit_button justify-content-end' ><Exit /></div>
                    <img src="dpcs_app/public/images/img_logo.png" className='login_card_img' alt="" />
                    <h3 className='m-auto login-title'>Login Here</h3>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">

                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />

                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-danger login_btn">Login</button>
                        </form>
                        <div className='m-auto'>
                        
                                <span className='policy_paragraph'><b>already have account?<NavLink to='/login' className='links' >Login</NavLink></b></span><br />

                            </div>


                    </div>
                </div>
            </div>
        </>

    )
}
export default TroubleLogin