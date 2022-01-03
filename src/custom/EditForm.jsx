import React from "react"
import { NavLink } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import { LocationOn } from "@material-ui/icons";

const EditForm = () => {
    return (<>
        <div className="conntainer py-3">
            <div className="row">
                <h1 className="text-center bg-danger text-white">Edit Form</h1>
                <div className="col-sm-6">
                    <h5 className="text-danger mt-5">Address details</h5>
                    <hr/>
                    <div className="address-detail">
                        <input type="text" className="form-control" placeholder="Block"></input>

                        <input className="form-control mt-3" type="text" placeholder="Street"></input>

                        <input type="text" className="form-control mt-3" placeholder="Avenue (optional)"></input>

                        <div className="mt-3">
                            <input type="text" className="form-control" placeholder="test"></input>

                            <input className="form-control mt-3" type="text" placeholder="floor (optional)"></input>

                            <input type="text" className="form-control mt-3" placeholder="Apartment Number (optional)"></input>
                            <input type="text" className="form-control mt-3" placeholder="Additional direction (optional)"></input>
                        </div>
                    </div>

                    <h5 className="text-danger mt-5">Contact information</h5>
                    <hr/>
                    <div className="contact-detail">
                        <input type="text" className="form-control mt-3" placeholder="0123456789"></input>
                        <input type="text" className="form-control mt-3" placeholder="Landing Number"></input>
                    </div>
                </div>

                <div className="col-sm-6">
                    <h5 className="text-danger mt-5">Delivery Address</h5>
                    <hr/>
                    <div className="edit-form">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0955084720886!2d72.53427811428307!3d23.05695982082942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84a714b887dd%3A0xf1cb61cbf1fd3adf!2sNobles%20Trade%20Center!5e0!3m2!1sen!2sin!4v1640321591818!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="true" loading="lazy"></iframe>
                        <div className="delivery-address">
                            <input type="text" className="form-control mt-3" placeholder="Address Name"></input>
                            {/* <span className="drop-down"> */}
                                <select className="form-control mt-3">
                                    <option>Home</option>
                                    <ooption>Office</ooption>
                                </select>
                            {/* </span> */}
                            <input type="text" className="form-control mt-3" placeholder="Area"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default EditForm