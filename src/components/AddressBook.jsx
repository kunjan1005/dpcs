import React from "react"
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addressData } from "../actions";
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { isUserLoging } from "../authorization/useAuth";
import axios from "axios";
import env from "../env";

const AddresssBook = ({setting}) => {
   
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let state = useSelector((state) => state.addressReducer)
    useEffect(() => {
        dispatch(addressData())
    }, [2])
    const handleChanged = async(addressChange) => {
        let userData = isUserLoging()
        let { user_id, lang,access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/default_address`,
            JSON.stringify({ user_id, lang, access_token,address_id:addressChange}), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
      dispatch(addressData())
      navigate('#')
   
        
    }
    return (<>
        <div className={setting?"container":"container w-50 mt-3"} style={setting?{backgroundColor: 'white'}:{backgroundColor: 'white', boxShadow: '1px 25px 25px grey,-1px -10px 25px grey' }}>
            <div className="row">

                {setting?null:<h6 className="bg-danger text-white">Address Book
                    <button type="button" class="btn-close" aria-label="Close" style={{ float: "right" }} onClick={() => navigate('#')}></button>
                </h6>}
                <div className="col-sm-12 p-2" style={{ height: "30rem" }}>
                    <Scrollbars>
                        {state.item.map((each) => {
                            return each.is_default == 1 ? <div className="address-book mt-2">
                                <span className="float-right"> <input type="radio" name="address" checked onChange={() => handleChanged(each.address_id)}></input></span>
                                <p className="text-warning add">{each.address_type}</p>
                                <p className="add">{each.address_name}</p>
                                <p className="add">Mobile Number:<NavLink to="#">{each.mobile_number}</NavLink></p>
                            </div> : <div className="address-book mt-2">
                                <span className="float-right"> <input type="radio" name="address" onChange={() => handleChanged(each.address_id)}></input></span>
                                <p className="text-warning add">{each.address_type}</p>
                                <p className="add">{each.address_name}</p>
                                <p className="add">Mobile Number:<NavLink to="#">{each.mobile_number}</NavLink></p>
                            </div>
                        })}


                    </Scrollbars>
                    {/* <div className="add_new">
                        <IconButton color="primary" aria-label="add to shopping cart" className='add_new_btn'>
                            <AddIcon />
                        </IconButton>
                    </div> */}
                </div>

            </div>
        </div>
    </>)
}
export default AddresssBook