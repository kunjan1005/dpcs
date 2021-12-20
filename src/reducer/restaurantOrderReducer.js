let initialState = {
    restaurantOrderDetails: {},
    totalItem:0,
    totalPrice:0,
}
let restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_ORDER_DATA":
        // console.log("this",action.payload)

            return {
                ...state,
                restaurantOrderDetails:action.payload,
                totalItem:action.payload.totalItem,
                totalPrice:action.payload.totalPrice
            }
        case "INCREMENT":
            let incItem=state.restaurantOrderDetails.data.map((each)=>{
            each.products.map((item)=>{
            //  if(item.food_item_id==action.payload){
            //     return {...state,quanity:}
            //  }else{
            //      return item
            //  }
                
            })
            
        })
        return {...state,restaurantOrderDetails:{data:[...incItem]}}
        case "DECREMENT":
           state.restaurantOrderDetails.data.map((each)=>{
            each.products.map((item)=>{
                console.log(item)
            })
        })
        
        
        default: return state

    }
}
export default restaurantOrderReducer