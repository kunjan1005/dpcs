import React, { useState } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const CustomMap = (props) => {
  console.log(props)
  const GoogleMapExmaple = withGoogleMap(prop => {
    return <GoogleMap
      defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}
      defaultZoom={13}>

      <Marker
        position={{
          lat: props.lat,
          lng: props.lng
        }} />
    </GoogleMap>
  })
  return (

    <GoogleMapExmaple
      containerElement={<div style={{ height: '400px', width: '100%' }} />}
      mapElement={<div style={{ height: '400px' }} />}
    />)
}

export default CustomMap
// import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
// const Map = withScriptjs(withGoogleMap((props) =>{
//    const recycleCenters = props.recycleCenters 
  
//    return (       
//        <GoogleMap zoom={4.5} center={ { lat:  39.6693, lng: -98.3476 } } />  
     
    
//       //  </GoogleMap>
//    )
// }))
// export default Map;