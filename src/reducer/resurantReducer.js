let initialState = {
    restaurants: [],
    restaurant: {}
}
let restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_DATA":
            return {
                ...state,
                restaurants:action.payload
            }
        case "GET_RES_DATA": return state
        case "GET_SINGLE_RES":
            return {
                ...state,
                restaurant: { ...state.restaurant, ...action.payload }
            }

        default: return state

    }
}
export default restaurantReducer