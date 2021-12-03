import jwt from 'jsonwebtoken'
import env from '../env'
import jwt_decode from 'jwt-decode'
// const env=require('../env'
const genrateToken = async (data) => {
    const token = await jwt.sign(data, env.JWT_SEC_KEY)
    return token;
}
const loginAuth = async () => {
    try {
        let token = localStorage.getItem('token')
        let isValid = await jwt.verify(token, env.JWT_SEC_KEY)
        if (isValid) {
            let user = await jwt_decode(token)
            if (user == undefined) {
               return {isLogin:true,user}
            }
        }
    } catch (err) {

    }
}
export default genrateToken
export { loginAuth }

