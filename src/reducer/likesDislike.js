const initialState ={
    count:0,
    id:[]
}

const likeDislike = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE_POST':

            return {count:state.count+1,
                     id:[...state.id,action.payload]} 
        case 'DISLIKE_POST':
            return {count:state.count-1,
                     id:state.id.filter(id=>id!=action.payload)} 
        default: return initialState
    }
}
export default likeDislike