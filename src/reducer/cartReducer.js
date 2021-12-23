let intialState={
    item:[],
    total:0
}
const cartReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'USER_CART_DATA':
            return {...state,item:action.payload}
        default:return state
    }
}
export default cartReducer