import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import {Markup} from 'interweave'
const HelpCenter = (props) => {
    let state=useSelector(state=>state.helpCenterReducer)
    return (<>
        <div className="modal fade w-100" id="myModal9" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Help Center</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <Markup content={state.data}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default HelpCenter;