
const initialState = {
    data: {other:false},
    status: 0,
    following: { total: 0, list: [] },
    followers: { total: 0, list: [] }
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_PROFILE':
            let { payload } = action
            return { ...state, data: { ...state.data, ...payload } }
        case 'STORE_OTHER_PROFILE':
            // let { payload } = action
            return { ...state, data: { ...state.data, ...action.payload,other:true } }

        case 'STORE_FOLLOWING_FOLLOWERS':
            return {
                ...state,
                following: {
                    total: action.payload.following.length,
                    list: action.payload.following
                },
                followers: {
                    total: action.payload.followers.length,
                    list: action.payload.followers
                }
            }
        default: return state
    }

}
export default userReducer