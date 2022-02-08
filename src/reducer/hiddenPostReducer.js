let intialState={
    list:[]
}
const hiddenPostReducer=(state=intialState,action)=>{
    switch(action.type){
        case "STORE_HIDDEN_POST":
            return {...state,list:action.payload}
        default:return state;
    }
}
export default hiddenPostReducer;