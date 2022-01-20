import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
import _ from 'underscore'
import env from '../env'

const Comments = (props) => {
    let { comment } = useSelector(state => state.postlikesListreducer)
    return (<>
        {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">


                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Comments</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>

                    </div>
                    <div className="modal-body" style={{height:"30rem"}}>
                        <Scrollbars>
                        {_.isEmpty(comment) ? "List Empty" : comment.map((each) => {
                            return <>
                                <div classNameName="commented-section">
                                    <div classNameName="d-flex flex-row add-comment-section mt-3 mb-3 col-12">
                                        <img classNameName="img-fluid img-responsive rounded-circle mr-3" src={`${env.URL}/dipicious/${each.user_profile_pic}`} width="38" />&nbsp;<b>{each.name == '' ? "unknown" : each.name}</b>&nbsp;&nbsp;{each.time} ago</div>

                                    <p classNameName='text-left ml-5'><span>{each.comment}</span></p>

                                </div>

                            </>
                        })}
                        </Scrollbars>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default Comments