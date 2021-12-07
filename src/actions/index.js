const storePostData=(post)=>{
    return{
        type:'STORE_DATA',
        payload:post
    }
}
const getPostData=(payload)=>{
    return{
        type:'GET_DATA',
        payload
    }
}
const like=(id,uid)=>{
    return{
        type:"LIKE_POST",
        payload:{id,uid}
    }
}
const dislike=(id)=>{
    return{
        type:"DISLIKE_POST",
        payload:id
    }
}
const contentShow=(text)=>{
    return{
        type:"SHOW_MORE",
        payload:text
    }
}
const contentHide=(text)=>{
    return{
        type:"SHOW_LESS",
        payload:text
    }
}
const login=(user)=>{
    return{
        type:"LOGIN",
        payload:user
    }
}
const logout=()=>{
    return{
        type:"LOGOUT"
    }
}
const getProfile=()=>{
    return {
        type:"GET_PROFILE"
    }
}


export default storePostData
export {getPostData,like,dislike,contentShow,contentHide,login,logout,getProfile}