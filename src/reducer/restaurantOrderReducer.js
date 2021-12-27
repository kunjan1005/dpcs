let initialState = {
    restaurantOrderDetails: {},
    totalItems: 0,
    totalPrice: 0
}
let restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_ORDER_DATA":
            // console.log("this",action.payload)

            return {
                ...state,
                restaurantOrderDetails: action.payload,
                totalItems: action.payload.totalItems
            }
        case "GET_RES_ORDER_DATA":
            return state
        default: return state

    }
}
export default restaurantOrderReducer