let intialState={
    data:"",
}
const termAndConditonReducer=(state=intialState,action)=>{
    switch(action.type){
        case "STORE_TERM_AND_CONDITION":
            return{
                ...state,
                data:action.payload
            }
        default:return state
    }
}
export default termAndConditonReducer