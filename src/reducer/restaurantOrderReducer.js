let initialState = {
    restaurantOrderDetails: {},
    totalItems: 0,
    totalPrice: 0
}
let restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_ORDER_DATA":
            // console.log("this",action.payload)

            return {
                ...state,
                restaurantOrderDetails: action.payload,
                totalItems: action.payload.totalItems
            }
        case 'INCREMENT':
            let updateCart = state.restaurantOrderDetails.data.map((category) => {
                let updateProduct = category.products.map((item) => {
                    if (item.food_item_id == action.payload) {
                        return { ...item, quantity:item.quantity==undefined?1:parseInt(item.quantity) + 1 }
                    }else{
                        return item
                    }
                })
                return {...category,products:updateProduct}

            })
            let {restaurantOrderDetails}=state
           return {...state,restaurantOrderDetails:{...restaurantOrderDetails,data:updateCart}}
        default: return state

    }
}
export default restaurantOrderReducer