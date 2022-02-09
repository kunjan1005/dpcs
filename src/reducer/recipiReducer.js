let initialState={
    list:[],
    data:{}
}
const recipiReducer=(state=initialState,action)=>{
    switch(action.type){
        case "STORE_USER_RECIPI":
            return {...state,list:action.payload}
        case "STORE_USER_RECIPI_DETAIL":
            return {...state,data:action.payload}
        default: return state;
    }
}
export default recipiReducer