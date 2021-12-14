import React from 'react'
import DipHeader from '../common/DipHeader'
import { useLocation } from 'react-router'
import AddDipin from './dipComponents/AddDipIn'
const Dip = () => {
  const location = useLocation()
  let tabindex = location.hash.split('#')[1]
  return (
    <>
      <DipHeader />
      <div className='container-fluid '>
        <div className='row'>
          <div className='explore_card m-auto'>

            {tabindex=='dipin'?<AddDipin/>:false}
            {/* {tabindex=='list'?<List/>:false} */}
            {/* {tabindex=='map'?<Map/>:false} */}
            {/* {tabindex=='recipe'?<Recipe/>:false} */}

          </div>
        </div>
      </div>
    </>

  )
}
export default Dip