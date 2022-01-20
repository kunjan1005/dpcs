import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'underscore'
import env from '../env'
import Scrollbars from 'react-custom-scrollbars-2'
const CustomeLikeList = (props) => {
    let state = useSelector((state) => state.postlikesListreducer)
    return <>
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">


                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Liked By</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      
                    </div>
                    <div className="modal-body" style={{height:"30rem"}}>
                        <Scrollbars style={{ overflowX: 'hidden' }}>
                            {_.isEmpty(state.list) ? 'List Empty' : state.list.map((each) => {
                                return <><div className="row">
                                    <div className="col-sm-2 col-4 like-container">
                                        <img src={`${env.URL}/dipicious/${each.user_profile_pic}`} className="logo-salad"></img>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <p className="p text-danger">{each.user_name}</p>
                                    </div>
                                    <div className="col-sm-2 col-2 ">
                                    </div>
                                </div></>
                            })}

                        </Scrollbars>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default CustomeLikeList
