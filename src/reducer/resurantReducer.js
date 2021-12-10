let initialState = {
    restaurants: [],
    restaurant: {},
    restaurantLimit:[]
}
let restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FATCH_RES_DATA":
            return {
                ...state,
                restaurants:action.payload
            }
        case "GET_RES_DATA": return state
        case "GET_SINGLE_RES":
            return {
                ...state,
                restaurant: { ...state.restaurant, ...action.payload }
            }
        case "GET_LIMITED_POST":
            let {current_page,per_page_items}=action.payload
            function paginator(items, per_page_items) {
                console.log(current_page,per_page_items)
                let page = current_page || 4,
                per_page = per_page_items || 10,
                offset = (page - 1) * per_page,
            
                paginatedItems = items.slice(offset).slice(0, per_page_items),
                total_pages = Math.ceil(items.length / per_page);
            
                return {
                    page: page,
                    per_page: per_page,
                    pre_page: page - 1 ? page - 1 : null,
                    next_page: (total_pages > page) ? page + 1 : null,
                    total: items.length,
                    total_pages: total_pages,
                    data: paginatedItems
                };
            }
            return {
                ...state,
                restaurantLimit:paginator(state.restaurants,action.payload)
            }
        default: return state

    }
}
export default restaurantReducer