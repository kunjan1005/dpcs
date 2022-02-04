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
                    <div className="modal-body row" style={{ height: "30rem" }}>
                        <div className="col-lg-6">
                            <h6>ACCOUNT SETTING</h6>
                            <ul>
                                <li className="text-center"><NavLink to='/profile/edit'><p>Edit Profile</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/myorders"><p>Change Password</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Blocked Users</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>View hidden posts</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Push notification settings</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Blocked Users</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Private Account</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Change Language</p></NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h6>ORDER SETTING</h6>

                            <ul>
                                <li className=""><NavLink to='/logout'><p>Address Book</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/myorders"><p>Orders</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Table Reservations</p></NavLink></li>

                            </ul>
                        </div>

                        {/* <ul>
                                <li className=""><NavLink to='/logout'><p>Logout</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/myorders"><p>Orders</p></NavLink></li>
                                <li className="text-center"><NavLink to="/restaurant/booking"><p>Table Reservations</p></NavLink></li>
                            </ul> */}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => props.close(false)}>Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileSetting