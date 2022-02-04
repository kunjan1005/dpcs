let initialState={
    list:[]
}

const followersReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'STORE_FOLLOWERS':
            return {...state,list:action.payload}
        default: return state
    }
}
export default followersReducer;