import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'underscore'
import env from '../env'

const Comments = (props) => {
    let { comment } = useSelector(state => state.postlikesListreducer)
    return (<>
        <div className="form-popup " style={{zIndex:"99"}} >
         {/* <div className='col-sm-4'></div> */}
            <div className='col-sm-5 text-center   bg-white'>
                <span style={{
                    float: 'right',
                    zIndex: 99,
                    color: "black",
                    cursor: "pointer"
                }}
                    onClick={() => { props.close(false) }}>&times;</span>
                <div className="mt-3 col-12 p-2">
                    <div className="coment-bottom  p-2 px-4">
                        <h5>Comments</h5>
                        <div className="d-flex flex-row add-comment-section mt-3 mb-3 col-12">
                            <img className="img-fluid img-responsive rounded-circle mr-3" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />&nbsp;<input type="text" className="form-control mr-2" placeholder="Add comment" />&nbsp;<button className="btn btn-primary" type="button">Post</button></div>
                        <hr />
                        {_.isEmpty(comment)?"List Empty":comment.map((each) => {
                            return <>
                                <div className="commented-section">
                                    <div className="d-flex flex-row add-comment-section mt-3 mb-3 col-12">
                                        <img className="img-fluid img-responsive rounded-circle mr-3" src={`${env.URL}/dipicious/${each.user_profile_pic}`} width="38" />&nbsp;<b>{each.name==''?"unknown":each.name}</b>&nbsp;&nbsp;{each.time} ago</div>

                                    <p className='text-left ml-5'><span>{each.comment}</span></p>

                                </div>

                            </>
                        })}

                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Comments