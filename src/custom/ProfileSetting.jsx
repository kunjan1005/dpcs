import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2"
import { NavLink } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import BlockUserList from './BlockUserList';
import { blockUserList, hiddenPost, storeUserProfile,helpCenter,privacyPolicy, termAndConditon} from "../actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isUserLoging } from "../authorization/useAuth";
import env from '../env'
import axios from 'axios'
import { useSelector } from "react-redux";
import ChangeLanguage from "./ChangeLanguage";
import HelpCenter from "./HelpCenter";
import AddressSetting from "../custom/AddressSetting";
import PrivacyPolicy from "./PrivacyPolicy";
import TermAndCondition from "./TermAndConditon";
const ProfileSetting = (props) => {
    const [showpassword, setShowPassword] = useState(false);
    const [showBlockUser, setShowBlockUser] = useState(false);
    const [showLangauge, setShowLanguage] = useState(false);
    const [showHelpCenter, setShowHelpCenter]=useState(false);
    const [showAddressBook,setShowAddressBook]=useState(false);
    const [showPrivacyPolicy,setShowPrivacyPolicy]=useState(false);
    const [showTermAndCondition,setShowTermAndCondition]=useState(false);
    let { data } = useSelector(state => state.userReducer)
    let dispatch = useDispatch()

    const handleChange = e => {
        try {
            let { access_token, user_id, lang } = isUserLoging().user
            axios.post(`${env.URL}/dipicious/api/user/private_account_update`, { access_token, user_id, lang, flag: e }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
            }).then((response) => {
                if (response.data.flag == 1) {
                    dispatch(storeUserProfile())

                } else {
                    toast.error('Could not change account type !!');
                }
            })
        } catch (error) {
            toast.error(`Something went wrong`)
        }
    }
    return (
        <>
            {showpassword ? <ChangePassword close={setShowPassword} /> : null}
            {showBlockUser ? <BlockUserList close={setShowBlockUser} /> : null}
            {showLangauge ? <ChangeLanguage close={setShowLanguage} /> : null}
            {showHelpCenter ? <HelpCenter close={setShowHelpCenter} /> : null}
            {showAddressBook?<AddressSetting close={setShowAddressBook}/>:null}
            {showPrivacyPolicy?<PrivacyPolicy close={setShowPrivacyPolicy}/>:null}
            {showTermAndCondition?<TermAndCondition close={setShowTermAndCondition}/>:null}
            <div className="modal fade" id="myModal2" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Settings</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
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
                                        <NavLink to="#" onClick={() => setShowPassword(true)}
                                            data-toggle="modal" data-target="#myModal6">
                                            <p className="li-nav-p">Change Password</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" onClick={() => {
                                            dispatch(blockUserList())
                                            setShowBlockUser(true)

                                        }
                                        }
                                            data-toggle="modal" data-target="#myModal7">
                                            <p className="li-nav-p">Blocked Users</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/post/hidden" onClick={() => dispatch(hiddenPost())}>
                                            <p className="li-nav-p">View hidden posts</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/notification/setting">
                                            <p className="li-nav-p">Push notification settings</p>
                                        </NavLink>
                                    </li>
                                    <li>

                                        <p className="li-nav-p">Private Account &nbsp;&nbsp;
                                            &nbsp;&nbsp;<span>{data.is_private == 1 ? <input type='checkbox' onChange={() => handleChange(0)} value='0' checked /> : <input type='checkbox' onChange={() => handleChange(1)} value='1' />}</span></p>

                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            onClick={() => setShowLanguage(true)}
                                            data-toggle="modal" data-target="#myModal8">
                                            <p className="li-nav-p">Change Language</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h6>ORDER SETTING</h6>

                                <ul className="ul">
                                    <li className="">

                                    <NavLink to="#" onClick={()=>setShowAddressBook(true)}
                                     data-toggle="modal" data-target="#myModal10">
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
                                        <NavLink to='#'
                                            onClick={() =>{
                                                dispatch(helpCenter())
                                                setShowHelpCenter(true)}}
                                            data-toggle="modal" data-target="#myModal9">
                                            <p className="li-nav-p">Help center</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/report">
                                            <p className="li-nav-p">Report a Problem</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h6>ABOUT</h6>

                                <ul className="ul">
                                    <li>
                                        <NavLink to='#' 
                                           onClick={() =>{
                                               dispatch(privacyPolicy())
                                               setShowPrivacyPolicy(true)}}
                                          data-toggle="modal" data-target="#myModal11">
                                            <p className="li-nav-p">Privacy Policy</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                        onClick={()=>{
                                            dispatch(termAndConditon());
                                            setShowTermAndCondition(true)
                                        }}
                                        data-toggle="modal" data-target="#myModal12">
                                            <p className="li-nav-p">Terms of Condition</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <NavLink to='/logout'><button className="btn btn-lg btn-warning w-100">LOGOUT</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ProfileSetting