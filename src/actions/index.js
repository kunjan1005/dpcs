const storePostData=(post)=>{
    return{
        type:'STORE_DATA',
        payload:post
    }
}
const getPostData=()=>{
    return{
        type:'GET_DATA',
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

export default storePostData
export {getPostData,like,dislike,contentShow,contentHide}