import React from 'react'
import { useSelector} from 'react-redux'
import _ from 'underscore'
import env from '../env'
import Scrollbars from 'react-custom-scrollbars-2'
const CustomeLikeList = (props) => {
    let state = useSelector((state) => state.postlikesListreducer)
    return <>
        <div className="form-popup py-5 m-auto" >

            <div className='col-sm-5 m-auto text-center bg-white'>
                <span style={{
                    float: 'right',
                    zIndex: 99,
                    color: "black",
                    cursor: "pointer"
                }}
                    onClick={() => { props.close(false) }}>&times;</span>
                <div className="mt-4 col-12 p-3">
                    <h3>Likes</h3>
                    <hr />
                    <><div className="my-orders mt-1 " style={{ height: '20rem' }}>
                        <Scrollbars style={{ overflowX: 'hidden' }}>
                            {_.isEmpty(state.list)?'List Empty':state.list.map((each) => {
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


                    </>
                </div>
            </div>
        </div>
    </>
}
export default CustomeLikeList