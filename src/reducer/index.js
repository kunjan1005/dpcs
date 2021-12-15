import storePostData from "./postData";
import likeDislike from "./likesDislike";
import showHideReducer from './dynamicPage'
import loginReducer from "./loginReducer";
import userReducer from './userReducer'
import restaurantReducer from "./resurantReducer";
import restaurantOrderReducer from "./restaurantOrderReducer";
import {combineReducers} from 'redux'
 const rootReducer=combineReducers({
     storePostData,
     likeDislike,
     showHideReducer,
     loginReducer,
     userReducer,
     restaurantReducer,
     restaurantOrderReducer
 })
 export default rootReducer
