import jwt from 'jsonwebtoken'
import jwt_decode from 'jsonwebtoken'
import env from '../env'
const login = {
    isLogin: false,
    user: {}
}
const loginReducer = async (state = login, action) => {
    switch (action.type) {
        case 'LOGIN':
           
            if (localStorage.getItem('token') == '' || localStorage.getItem('token')==null) {
                return {isLogin:false,user:{}}
            } else {
                let token = localStorage.getItem('token')
                let isValid = jwt.verify(token, env.JWT_SEC_KEY)
                if (isValid) {
                    let user = await jwt_decode(token)
                    if (user == undefined) {
                        return { isLogin: true, user }
                    } else {
                        return { isLogin: false, user: {} }
                    }
                }
            }
        case 'LOGOUT':
            return true
        default: return login
    }
}
export default loginReducer