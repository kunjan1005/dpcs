let initialState={
    tableDetails:[],
    table:{}
}
const bookingTableDetails=(state=initialState,action)=>{
    switch (action.type){
        case "STORE_TABLE_BOOKING_DETAILS":
            return {...state,tableDetails:action.payload}
        case "STORE_TABLE_DETAILS":
            return {...state,table:{...action.payload}}      
        default:return state    
    }
       
}
export default bookingTableDetails