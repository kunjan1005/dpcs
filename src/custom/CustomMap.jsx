import React, { useState } from 'react'
import {withGoogleMap,GoogleMap,Marker} from 'react-google-maps'

const CustomMap = (props) => {
    const GoogleMapExmaple=withGoogleMap(prop=>{
        return <GoogleMap
         defaultCenter={{lat:props.lat,lng:props.lng}}
         defaultZoom={13}>
         </GoogleMap>
    })
    return (
  
            <GoogleMapExmaple
              containerElement={<div style={{height:'400px',width:'100%'}} />}
              mapElement={<div style={{height:'400px'}} />}
            />)
}

export default CustomMap

