const jwt =require('jsonwebtoken')
const env=require('../env')
const genrateToken=async(username,password)=>{
    const token=await jwt.sign({username,password},env.JWT_SEC_KEY)
    return token;    
}
export default genrateToken