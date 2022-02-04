let intialState={
    list:[]
}

const friendRequiestReducer=(state=intialState,action)=>{
    switch(action.type){
        case "STORE_FRIEND_REQUESTS":
            return {...state,list:action.payload}
        default: return state
    }
}
export default friendRequiestReducer;