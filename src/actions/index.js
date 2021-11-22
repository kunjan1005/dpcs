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
const like=(id)=>{
    return{
        type:"LIKE_POST",
        payload:id
    }
}
const dislike=(id)=>{
    return{
        type:"DISLIKE_POST",
        payload:id
    }
}

export default storePostData
export {getPostData,like,dislike}