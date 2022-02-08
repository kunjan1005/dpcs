const initialState={
    data:""
}
const helpCenterReducer=(state=initialState,action)=>{
    switch(action.type){
       case "STORE_HELP_CENTER":
           return{...state,data:action.payload.description}
       default:return state;
    }
}
export default helpCenterReducer;