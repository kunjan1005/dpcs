import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { contentShow, contentHide } from '../actions/index'

const Cuisines = () => {
    let state = useSelector((state) => state.showHideReducer)
    let dispatch = useDispatch()
    return (<>
        <div className='card-list-container'>
            <h4>Recommanded</h4>
            <hr />
            <div className='list card-list' style={{ height: state.height }}>
                < h5>Empty List</h5>
                <hr />
                <span className='see_more' onClick={state.isDisplay ? () => dispatch(contentHide()) : () => dispatch(contentShow())}>{state.text}</span>
            </div>

        </div>
    </>)
}
export default Cuisines