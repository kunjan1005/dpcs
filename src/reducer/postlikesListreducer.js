let initialState = {
    list:[],
    comment:[]
   
}
let postlikesListreducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_POST_LIKES":
            return {
                ...state,
                list: action.payload,
            }
        case "FATCH_POST_COMMETNS":
            return {
                ...state,
                comment:action.payload

            }
        default: return state

    }
}
export default postlikesListreducer