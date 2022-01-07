let initialState={
    tableDetails:[],
    table:{}
}
const BookingTableDetails=(state,action)=>{
    switch (action.type){
        case "STORE_TABLE_BOOKING_DETAILS":
            return {...state,tableDetails:action.payload}
        case "STORE_TABLE":
            return {...state,table:{...action.payload}}          
    }
       
}