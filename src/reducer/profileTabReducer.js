const intialState={
    activity:{total:0,item:[]},
    favoriate:{total:0,item:[]},
    reviews:[],
    points:[]
}

const profileTabReducer=(state=intialState,action)=>{
    switch (action.type){
        case "FATCH_USER_ACTIVITY":
            return {...state,activity:{
                       total:action.payload.length,
                       item:action.payload}}
        break
        case "FATCH_USER_FAVORIATES":
            return {...state,favoriate:{
                total:action.payload.length,
                item:action.payload}}
        break
        default: return state
    }
}
export default profileTabReducer