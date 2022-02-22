import axios from "axios"
import env from "../env"
import { isUserLoging } from "../authorization/useAuth"
const storeUserProfile = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_detail`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "STORE_PROFILE", payload: response.data.data })
    }
}
const storeOtherUserProfile = (payload) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, other_user_id: payload })
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_detail`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "STORE_OTHER_PROFILE", payload: response.data.data })
    }
}
const storefollowersAndFollowingList = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let following = await axios.post(`${env.URL}/dipicious/api/user/following_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        let followers = await axios.post(`${env.URL}/dipicious/api/user/follower_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_FOLLOWING_FOLLOWERS",
            payload: { followers: followers.data.data, following: following.data.data }
        })

    }
}
const follower_list = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let followers = await axios.post(`${env.URL}/dipicious/api/user/follower_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_FOLLOWERS",
            payload: followers.data.data
        })

    }
}
const following_list = (offset = 10, other_user_id = '') => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, other_user_id, offset })
        let following = await axios.post(`${env.URL}/dipicious/api/user/following_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_FOLLOWING",
            payload: following.data.data
        })

    }
}
const friend_request_list = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/freind_request_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_FRIEND_REQUESTS",
            payload: response.data.data
        })

    }
}
const blockUserList = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/block_user_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_BLOCK_USER",
            payload: response.data.data
        })
    }
}
const hiddenPost = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/hidden_post_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_HIDDEN_POST",
            payload: response.data.data
        })
    }
}
const helpCenter = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/help_center`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_HELP_CENTER",
            payload: response.data.data
        })
    }
}
const privacyPolicy = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/privacy_policy`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_PRIVACY_POLICY",
            payload: response.data.data
        })
    }
}
const termAndConditon = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/terms_condition`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_TERM_AND_CONDITION",
            payload: response.data.data
        })
    }
}
const storeProducts = () => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/category_wise_product_list_order`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_POINT_PRODUCT",
            payload: response.data
        })
    }
}
const userProductDetial = (id) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, product_id: id })
        let response = await axios.post(`${env.URL}/dipicious/api/user/product_detail`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({
            type: "STORE_PRODUCT_DETAIL",
            payload: response.data.data
        })
    }
}
const fatchData = () => {
    return async function (dispatch, getState) {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/global_post_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "FATCH_DATA", payload: response.data.data })
    }
}
const personaData = () => {
    return async function (dispatch, getState) {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token })
        let response = await axios.post(`${env.URL}/dipicious/api/user/personal_post_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "PERSONAL_DATA", payload: response.data.data })
    }
}
const postLikes = (id) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, post_id: id })
        let response = await axios.post(`${env.URL}/dipicious/api/user/like_list`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "FATCH_POST_LIKES", payload: response.data.data })
    }
}
const postComments = (id) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, post_id: id })
        let response = await axios.post(`${env.URL}/dipicious/api/user/comment_post_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "FATCH_POST_COMMETNS", payload: response.data.data })
    }
}
const setSinglePost = (payload) => {
    return {
        type: "SINGLE_POST",
        payload
    }
}
const storePostData = () => {
    return {
        type: 'STORE_DATA',
    }
}
const getPostData = () => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_DATA' })
    }
}
const like = (id) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, post_id: id, flag: 1 })
        let response = await axios.post(`${env.URL}/dipicious/api/user/add_like`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })

    }
}
const dislike = (id) => {
    return async (dispatch, getState) => {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, post_id: id, flag: 0 })
        let response = await axios.post(`${env.URL}/dipicious/api/user/add_like`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
    }

}
const contentShow = (text) => {
    return {
        type: "SHOW_MORE",
        payload: text
    }
}
const contentHide = (text) => {
    return {
        type: "SHOW_LESS",
        payload: text
    }
}
const login = (user) => {
    return {
        type: "LOGIN",
        payload: user
    }
}
const logout = () => {
    return {
        type: "LOGOUT"
    }
}
const getProfile = () => {
    return {
        type: "GET_PROFILE"
    }
}
const fatchRetaurant = () => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        let response = await axios.post(`${env.URL}/dipicious/api/user/resturant_list_explore_tab`, JSON.stringify({ user_id, lang, longitude, latitude, access_token }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "FATCH_RES_DATA", payload: response.data.data })
        dispatch({ type: "GET_LIMITED_POST", payload: { current_page: 1, per_page_items: 3 } })
    }

}
const getRestaurant = () => {
    return {
        type: "GET_RES_DATA",
    }
}
const getSingleRestaurant = (payload) => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        axios.post(`${env.URL}/dipicious/api/user/restaurant_detail`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch({ type: 'GET_SINGLE_RES', payload: response.data.data })
        })
    }
}
const getLocation = (payload) => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        axios.post(`${env.URL}/dipicious/api/user/get_location_from_restaurant`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch({ type: 'GET_RESTAURANT_LOCATION_LIST', payload: response.data.data })
        })
    }
}
const getRestaurantList = () => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        axios.post(`${env.URL}/dipicious/api/user/resturant_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch({ type: 'GET_RESTAURANT_LIST', payload: response.data.data })
        })
    }
}
const getReviewRestaurant = (payload) => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        axios.post(`${env.URL}/dipicious/api/user/restaurant_detail_reviews_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch({ type: 'GET_RESTAURANT_REVIEW_LIST', payload: response.data })
        })
    }
}
const getDipinRestaurant = (payload) => {
    return async (dispatch, getState) => {
        let { user } = isUserLoging()
        let { user_id, lang, longitude, latitude, access_token } = user
        axios.post(`${env.URL}/dipicious/api/user/restaurant_dip_ins`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        }).then((response) => {
            dispatch({ type: 'GET_RESTAURANT_DIP_LIST', payload: response.data })
        })
    }
}
const paginatedData = (payload = 5) => {
    return {
        type: "GET_LIMITED_POST",
        payload
    }
}
const restaurantOrderDetails = (resId) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let restaurant_id = resId
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/category_product_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: restaurant_id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'FATCH_RES_ORDER_DATA', payload: response.data })
    }
}
const storeOrder = () => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/my_order_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_ORDER', payload: response.data.data })
    }
}
const storeOrderDetails = (id) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/order_detail`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, order_id: id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_ORDER_DETAILS', payload: response.data.data })
    }
}
const storeTableBookingDetails = (id) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/table_booking_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_TABLE_BOOKING_DETAILS', payload: response.data.data })
    }
}
const storeTableDetails = (id) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, access_token } = userData.user

        let response = await axios.post(`${env.URL}/dipicious/api/user/table_booking_detail`,
            JSON.stringify({ user_id, lang, access_token, booking_table_id: id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_TABLE_DETAILS', payload: response.data.data })
    }
}
const getRestaurantOrderDetails = () => {
    return {
        type: "GET_RES_ORDER_DATA"
    }
}
const incrementOrderQty = (id) => {
    return {
        type: "INCREMENT",
        payload: id
    }
}
const decrementOrderQty = (id) => {
    return {
        type: "DECREMENT",
        payload: id
    }
}
const userActivity = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user

        let response = await axios.post(`${env.URL}/dipicious/api/user/user_activity_listing`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, other_user_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'FATCH_USER_ACTIVITY', payload: response.data.data })
    }
}
const userFavorites = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_favorite_listing`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, other_user_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'FATCH_USER_FAVORIATES', payload: response.data.data })
    }
}
const userfeedback = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_feedback_listing`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, other_user_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'FATCH_USER_FEEDBACK', payload: response.data.data })
    }
}
const userPoints = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/user_point_listing`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, other_user_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'FATCH_USER_POINT', payload: response.data.data })
    }
}
const userRecipi = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/recipe_listing`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, other_user_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_USER_RECIPI', payload: response.data.data })
    }
}
const userRecipiDetial = (payload) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/recipe_detail`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, recipe_id: payload }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_USER_RECIPI_DETAIL', payload: response.data.data })
    }
}
const cartData = (resId) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let restaurant_id = resId
        let { user_id, lang, latitude, longitude, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/cart_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'STORE_CART_DATA', payload: response.data.data })

    }
}
const getCartData = () => {
    return {
        type: "USER_CART_DATA_GET"
    }
}
const removeCartItem = (id, refresh) => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let cart_id = id
        let { user_id, lang, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/add_to_cart`,
            JSON.stringify({ user_id, lang, access_token, cart_id, flag: 2 }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'DELETE_CART_ITEM', payload: id })
        refresh()
    }
}
const addressData = () => {
    return async (dispatch, getState) => {
        let userData = isUserLoging()
        let { user_id, lang, access_token } = userData.user
        let response = await axios.post(`${env.URL}/dipicious/api/user/address_book_list`,
            JSON.stringify({ user_id, lang, access_token, }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: 'USER_ADDRESS_DATA', payload: response.data.data })

    }
}

export default storePostData
export {
    storeUserProfile, storeOtherUserProfile, storefollowersAndFollowingList, getPostData, like, dislike,
    postLikes, contentShow, contentHide, login, logout, getProfile, fatchData, setSinglePost, fatchRetaurant,
    getRestaurant, getSingleRestaurant, paginatedData, getLocation, restaurantOrderDetails, getRestaurantList,
    getRestaurantOrderDetails, storeTableBookingDetails, storeTableDetails, incrementOrderQty, decrementOrderQty,
    userActivity, userFavorites, userfeedback, userPoints, cartData, getCartData, addressData, getReviewRestaurant,
    removeCartItem, storeOrder, storeOrderDetails, getDipinRestaurant, postComments, follower_list, following_list,
    friend_request_list, blockUserList, hiddenPost, helpCenter, privacyPolicy, termAndConditon, userRecipi, userRecipiDetial,
    storeProducts, userProductDetial, personaData
}