import axios from 'axios'
import env from '../env'
const initialState= [
  {
      title:'hotel test',
      overview:"this is veru awesome hotel",
      discription:"this is awesome hotel and food is clean",
      visit:'5m',
      picture:'https://tse2.mm.bing.net/th?id=OIP._h7s27M_cYLoJ7SzE7XRZQHaEK&pid=Api&P=0&w=284&h=160' ,
      likes:'26',

   }, {
    title:'hotel test',
    overview:"this is veru awesome hotel",
    discription:"this is awesome hotel and food is clean",
    visit:'5m',
    picture:'https://tse2.mm.bing.net/th?id=OIP._h7s27M_cYLoJ7SzE7XRZQHaEK&pid=Api&P=0&w=284&h=160',
    likes:'26',

 }
]
const storePostData=(state=initialState,action)=>{
    switch(action.type){       
        case 'STORE_DATA': 
          let posts=action.posts
          return {...initialState,...posts}
        case 'GET_DATA': 
       
          return initialState
        default:return initialState
    }

}
export default storePostData