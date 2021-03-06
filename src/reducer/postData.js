
const initialState = {
    global: [],
    personal: []
}
const storePostData = (state = initialState, action) => {
    switch (action.type) {
        case 'FATCH_DATA':
            return { ...state, global: action.payload }
        case 'STORE_DATA':
            return state
        case 'GET_DATA': return state;
        case 'PERSONAL_DATA':
            return { ...state, personal: action.payload }
        case 'SINGLE_POST':
            // let id=action.payload
            return action.payload
        default: return state
    }

}
export default storePostData