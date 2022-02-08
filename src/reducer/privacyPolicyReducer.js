const initialState={
    data:""
}
const privacyPolicyReducer=(state=initialState,action)=>{
    switch(action.type){
       case "STORE_PRIVACY_POLICY":
           return{...state,data:action.payload.description}
       default:return state;
    }
}
export default privacyPolicyReducer;