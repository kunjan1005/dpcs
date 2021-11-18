import storePostData from "./postData";
import likeDislike from "./likesDislike";
import {combineReducers} from 'redux'
 const rootReducer=combineReducers({
     storePostData,
     likeDislike
 })
 export default rootReducer
