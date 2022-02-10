let initialState = {
    list: [],
    data: {},
    total_points:0
}
const storeProuctReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_POINT_PRODUCT':
            return { ...state, list: action.payload.data,total_points:action.payload.total_points }
            break;
        case "STORE_PRODUCT_DETAIL":
            return { ...state, data: action.payload }
        default:
            return state;
            break;
    }
}
export default storeProuctReducer