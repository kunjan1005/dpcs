import React from "react";
import Scrollbars from "react-custom-scrollbars-2"
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'; 
import _ from 'underscore';
const FriendRequiestList = (props) => {
    let state=useSelector(state=>state.friendRequiestListReducer)
    return (
        <div className="modal fade" id="myModal5" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">FRIEND REQUEST</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>

                    </div>
                    <div className="modal-body row" style={{ height: "30rem" }}>
                         {_.isEmpty(state)?<h6 className="text-center">List Empty</h6>:""}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => props.close(false)}>Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FriendRequiestList