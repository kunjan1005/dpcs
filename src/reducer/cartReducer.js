let intialState = {
    item: [],
    totalPrice: 0
}
const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'USER_CART_DATA':
            return {
                ...state,
                item: action.payload,
                totalPrice:action.payload.length==1?action.payload.reduce((a)=>parseFloat(a.item_price)):action.payload.reduce((a, b) => parseFloat(b.item_price) + parseFloat(a.item_price))
            }
        case 'INCREMENT':
            console.log(action.payload)
            var updatePlusCart = state.item.map((each) => {
                if (action.payload == each.cart_id) {
                    return { ...each, quantity: parseInt(each.quantity) + 1 }
                } else {
                    return each
                }
            })
            return {
                ...state,
                totalPrice: updatePlusCart.reduce((a, b) => {
                    if(b==undefined){
                        return parseInt(a.quantity) * parseFloat(a.item_price) 
                    }else{
                    return parseInt(a.quantity) * parseFloat(a.item_price) + parseInt(b.quantity) * parseFloat(b.item_price)
                    }
                }),
                item: updatePlusCart
            }
        case 'DECREMENT':
            var updatePlusCart = state.item.map((each) => {
                if (action.payload == each.cart_id) {
                    return { ...each, quantity: each.quantity == 0 ? 1 : parseInt(each.quantity) - 1 }
                } else {
                    return each
                }
            })
            return {
                ...state,  totalPrice: updatePlusCart.reduce((a, b) => {
                    if(b==undefined){
                        return parseInt(a.quantity) * parseFloat(a.item_price) 
                    }else{
                    return parseInt(a.quantity) * parseFloat(a.item_price) + parseInt(b.quantity) * parseFloat(b.item_price)
                    }
                }),
                item: updatePlusCart
            }
        default: return state
    }
}
export default cartReducer