let initialState = {
    restaurantOrderDetails: {},
}
let restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_ORDER_DATA":
        // console.log("this",action.payload)

            return {
                ...state,
                restaurantOrderDetails:action.payload
            }
        default: return state

    }
}
export default restaurantOrderReducer