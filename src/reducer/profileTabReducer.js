const intialState = {
    activity: { total: 0, item: [] },
    favoriate: { total: 0, item: [] },
    reviews:{total:0,item:[]},
    points: {total:0,item:{}}
}

const profileTabReducer = (state = intialState, action) => {
    switch (action.type) {
        case "FATCH_USER_ACTIVITY":
            return {
                ...state, activity: {
                    total: action.payload.length,
                    item: action.payload
                }
            }
            break
        case "FATCH_USER_FAVORIATES":
            return {
                ...state, favoriate: {
                    total: action.payload.length,
                    item: action.payload
                }
            }
            break
        case "FATCH_USER_FEEDBACK":
            return {
                ...state, reviews: {
                    total: action.payload.length,
                    item: action.payload
                }
            } 
            break
        case "FATCH_USER_POINT":
            return {...state, points:{
                     total:action.payload.total_point,
                     item: action.payload
            }
            }
        default: return state
    }
}
export default profileTabReducer