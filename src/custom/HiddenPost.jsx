import React, { useEffect, useState } from "react";
import Post from "../common/Post";
import { useDispatch, useSelector } from "react-redux";
import { hiddenPost } from "../actions";
const HiddenPost = () => {

    let state = useSelector(state => state.hiddenPostReducer)
    let dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(hiddenPost())
        }, 900);
    }, [1])
    return (<>
        <Post post={state.list} />
    </>
    )
}
export default HiddenPost