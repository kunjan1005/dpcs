import axios from "axios"
import env from "../env"
import { isUserLoging } from "../authorization/useAuth"
const fatchData = () => {
    return async function (dispatch, getState) {
        let data = isUserLoging()
        let { user_id, lang, access_token } = data.user
        let jsonData = JSON.stringify({ user_id, lang, access_token, offset: 10 })
        let response = await axios.post(`${env.URL}/dipicious/api/user/global_post_listing`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        dispatch({ type: "FATCH_DATA", payload: response.data.data })

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
const like = (id, uid) => {
    return {
        type: "LIKE_POST",
        payload: { id, uid }
    }
}
const dislike = (id) => {
    return {
        type: "DISLIKE_POST",
        payload: id
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
    return {
        type: "GET_SINGLE_RES",
        payload

    }
}
const paginatedData = (payload = 5) => {
    return {
        type: "GET_LIMITED_POST",
        payload
    }
}
const restaurantOrderDetails = (resId) => {
    return async(dispatch,getState) => {
        let userData = isUserLoging()
        let restaurant_id=resId
        let { user_id, lang, latitude, longitude, access_token } = userData.user

        let response=await axios.post(`${env.URL}/dipicious/api/user/category_product_list`,
            JSON.stringify({ user_id, lang, latitude, longitude, access_token, restaurant_id: restaurant_id }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic cm9vdDoxMjM='
            }
        })
        console.log(response)
      dispatch({type:'FES_RES_ORDER_DATA',payload:response.data.data})
      
    }

}


export default storePostData
export {
    getPostData, like, dislike, contentShow, contentHide, login, logout,
    getProfile, fatchData, setSinglePost, fatchRetaurant, getRestaurant,
    getSingleRestaurant, paginatedData,restaurantOrderDetails
}