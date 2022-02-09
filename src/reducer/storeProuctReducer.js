let initialState={
    list:[],
    data:{},
}
const storeProuctReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'STORE_POINT_PRODUCT':
            return {...state,list:action.payload}
            break;
    
        default:
            return state;
            break;
    }
}
export default storeProuctReducer