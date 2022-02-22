import React from 'react';
import { fatchData, personaData } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PostTab = () => {
    let dispatch = useDispatch()
    return (<>
        <div className="post-tab-container container p-3">
            <div className="row">
                <div className="col-lg-6 col-6" onClick={() => dispatch(fatchData())}>
                    <h6>GLOBAL</h6>
                </div>
                <div className="col-lg-6 col-6" onClick={() => dispatch(personaData())}>
                    <h6>PERSONAL</h6>
                </div>
            </div>
        </div></>)
}
export default PostTab