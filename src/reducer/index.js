import storePostData from "./postData";
import showHideReducer from './dynamicPage'
import loginReducer from "./loginReducer";
import userReducer from './userReducer'
import restaurantReducer from "./resurantReducer";
import restaurantOrderReducer from "./restaurantOrderReducer";
import cartReducer from "./cartReducer";
import profileTabReducer from './profileTabReducer'
import addressReducer from "./addressReducer";
import bookingTableDetails from "./bookingTableDetails";
import postlikesListreducer from './postlikesListreducer'
import followersReducer from './followersReducer';
import followingReducer from "./followingReducer";
import friendRequiestReducer from './friendRequiestReducer'
import {combineReducers} from 'redux'
 const rootReducer=combineReducers({
     storePostData,
     showHideReducer,
     loginReducer,
     userReducer,
     restaurantReducer,
     restaurantOrderReducer,
     profileTabReducer,
     cartReducer,
     addressReducer,
     bookingTableDetails,
     postlikesListreducer,
     followersReducer,
     followingReducer,
     friendRequiestReducer
 })
 export default rootReducer
