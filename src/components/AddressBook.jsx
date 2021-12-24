import React from "react"
import { NavLink } from "react-router-dom";
import LikeIcon from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/MessageOutlined'
import { LocationOn } from "@material-ui/icons";

const AddresssBook = () => {
    return (<>
        <div className="container w-50">
            <div className="row">
                <h1 className="text-center bg-danger text-white mt-3">Address Book</h1>
                <div className="col-sm-12">
                <h5 className="text-danger mt-5">Home<span className="float-right"> <input type="checkbox" checked></input></span></h5>
                    <div className="address-book mt-4">
                        <p className="text-warning add">Home</p>
                        <p className="add">49 St, Zahra, Kuwait</p>
                        <p className="add">Mobile Number:<NavLink to="#"> 0123456789</NavLink></p>
                    </div>

                    <h5 className="text-danger mt-5">Home<span className="float-right"> <input type="checkbox" checked></input></span></h5>
                    <div className="address-book mt-4">
                        <p className="text-warning add">Home</p>
                        <p className="add">49 St, Zahra, Kuwait</p>
                        <p className="add">Mobile Number:<NavLink to="#"> 0123456789</NavLink></p>
                    </div>

                    <h5 className="text-danger mt-5">OFFICE<span className="float-right"> <input type="checkbox" checked></input></span></h5>
                    <div className="address-book mt-4">
                        <p className="text-warning add">Home</p>
                        <p className="add">49 St, Zahra, Kuwait</p>
                        <p className="add">Mobile Number:<NavLink to="#"> 0123456789</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AddresssBook