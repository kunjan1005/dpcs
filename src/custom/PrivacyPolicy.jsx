import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {Markup} from 'interweave'

const PrivacyPolicy = (props) => {
    let state=useSelector(state=>state.privacyPolicyReducer)
    return (<>
        <div className="modal fade" id="myModal11" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Privacy Policy</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <Markup content={state.data}/>
                        {/* {state.data} */}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default PrivacyPolicy;