let intialState={
    list:[]
}
const blockUserReducer=(state=intialState,action)=>{
    switch(action.type){
        case "STORE_BLOCK_USER":
            return {...state,list:action.payload}
        default:return state;
    }
}
export default blockUserReducer;