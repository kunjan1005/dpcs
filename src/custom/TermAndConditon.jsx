import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import {Markup} from 'interweave'
const TermAndCondition = (props) => {
    let state=useSelector(state=>state.termAndConditonReducer)
    return (<>
        <div className="modal fade w-100" id="myModal12" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Terms and Conditons</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                        <Markup content={state.data.description}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default TermAndCondition;