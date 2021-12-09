let initialState = []
let restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_DATA":
            return action.payload
        case "GET_RES_DATA":return state

        default: return state

    }
}
export default restaurantReducer