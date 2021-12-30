
const initialState = {
    data:{},
    status:0
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_PROFILE':
 
            return {...state,data:action.payload}
        default: return state
    }

}
export default userReducer