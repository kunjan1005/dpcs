import React from 'react'
import CustomForm from './Customform'
import {useSelector} from 'react-redux'
const DipinForm = ({restaurant_id}) => {
    let {restaurantlist} = useSelector((state) =>state.restaurantReducer)
    return (<>
     <div className="form-popup py-1">
            
           <CustomForm data={restaurantlist} restaurant_id={restaurant_id}/>
        </div>
    </>)
}
export default DipinForm