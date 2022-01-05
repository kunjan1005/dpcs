import lodash from 'lodash'
let intialState = {
    item: [],
    totalPrice: 0,
    empty: true
}
const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'STORE_CART_DATA':
            if (action.payload == undefined) {
                return { ...state }
            }
            return {
                ...state, empty: false,
                item: action.payload,
                totalPrice: action.payload.map(o => parseFloat(o.cart_item_price)).reduce((a, c) => { return a + c })
            }
        case 'USER_CART_DATA_GET':
            return { ...state }
        case 'INCREMENT':
            var data = {
                ...state,
                item: state.item.map((each) => {
                    if (action.payload == each.cart_id) {
                        return {
                            ...each, quantity: parseInt(each.quantity) + 1,
                            cart_item_price: (parseInt(each.quantity) + 1) * parseFloat(each.item_detail.item_price)
                        }
                    } else {
                        return each
                    }
                }),
            }
            return {
                ...data, totalPrice: data.item.length == 1 ? data.item[0].cart_item_price : data.item.reduce((a = 0, b) => {
                    return a + b.item_detail.item_price * b.quantity
                })
            }
        case 'DECREMENT':
            var data = {
                ...state,
                item: state.item.map((each) => {
                    if (action.payload == each.cart_id) {
                        return {
                            ...each, quantity: parseInt(each.quantity) - 1,
                            cart_item_price: (parseInt(each.quantity) - 1) * parseFloat(each.item_detail.item_price)
                        }
                    } else {
                        return each
                    }
                }),
            }
            return {
                ...data, totalPrice: data.item.length == 1 ? data.item[0].cart_item_price : data.item.reduce((a = 0, b) => {
                    return a + b.item_detail.item_price * b.quantity
                })
            }
        case 'DELETE_CART_ITEM':
            return {
                ...state, item: state.item.filter((each) => {
                    return each.cart_id != action.payload
                })
            }

        default: return state
    }
}
export default cartReducer