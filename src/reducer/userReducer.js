import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import env from '../env'
const initialState={}
  const userReducer=(state=initialState,action)=>{
      switch(action.type){       
          case 'GET_PROFILE': 
          let token = localStorage.getItem('token')
          console.log(token)
          let isValid = jwt.verify(token, env.JWT_SEC_KEY)
          if (isValid) {
              let user = jwt_decode(token)
              if (user != undefined) {
                 return {...user}
              }
          }
           
          case 'STORE_PROFILE':
              let user=action.payload 
            return {...user}
          default:return state
      }
  
  }
  export default userReducer