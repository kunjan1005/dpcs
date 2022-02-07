import React from "react";
import Scrollbars from "react-custom-scrollbars-2"
import { NavLink } from "react-router-dom";
const ProfileSetting = (props) => {
    return (
        <div className="modal fade" id="myModal2" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Liked By</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-lg-6">
                            <h6>ACCOUNT SETTING</h6>
                            <ul className="ul">
                                <li>
                                    <NavLink to='/profile/edit'>
                                        <p className="li-nav-p">Edit Profile</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/myorders">
                                        <p className="li-nav-p">Change Password</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Blocked Users</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">View hidden posts</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Push notification settings</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Blocked Users</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Private Account</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Change Language</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h6>ORDER SETTING</h6>

                            <ul className="ul">
                                <li className="">
                                    <NavLink to='/logout'>
                                        <p className="li-nav-p">Address Book</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/myorders">
                                        <p className="li-nav-p">Orders</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurant/booking">
                                        <p className="li-nav-p">Table Reservations</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* <ul>
                                <li className=""><NavLink to='/logout'><p>Logout</p></NavLink></li>
                                <li><NavLink to="/restaurant/myorders"><p>Orders</p></NavLink></li>
                                <li><NavLink to="/restaurant/booking"><p>Table Reservations</p></NavLink></li>
                            </ul> */}

                    </div>

                    {/* new section */}
                    <div className="modal-body row">
                        <div className="col-lg-6">
                            <h6>SUPPORT</h6>
                            <ul className="ul">
                                <li>
                                    <NavLink to='#'>
                                        <p className="li-nav-p">Help center</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <p className="li-nav-p">Report a Problem</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h6>ABOUT</h6>

                            <ul className="ul">
                                <li>
                                    <NavLink to='#'>
                                        <p className="li-nav-p">Privacy Policy</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <p className="li-nav-p">Terms of Condition</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-lg btn-warning">LOGOUT</button>
                    </div>

                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => props.close(false)}>Close</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
export default ProfileSetting