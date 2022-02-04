let initialState={
    list:[]
}

const followingReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'STORE_FOLLOWING':
            return {...state,list:action.payload}
        default: return state
    }
}
export default followingReducer;