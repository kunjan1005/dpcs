import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'underscore';
const BlockUserList=props=>{
    const state=useSelector(state=>state.blockUserReducer);
    return(<>
      <div className="modal fade" id="myModal7" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Block User</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => props.close(false)}>&times;</button>
                    </div>
                    <div className="modal-body row">
                       {_.isEmpty(state.list)?<h6 className='text-center'>List Empty</h6>:
                       ''}
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default BlockUserList;