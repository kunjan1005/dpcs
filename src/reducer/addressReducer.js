let intialState = {
    item: [],
    default:{}
}
const addressReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'USER_ADDRESS_DATA':
            return {item:action.payload,default:action.payload.filter((each)=>each.is_default==1)[0]}
        default: return state
    }
}
export default addressReducer