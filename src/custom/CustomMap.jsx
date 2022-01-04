import React from 'react'
import { Map, GoogleApiWrapper,Marker} from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};
const CustomMap = (props) => {
  return (<>
         <Map
            google={props.google}
            containerStyle={{
                position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
            center={props.data[0]}
            initialCenter={props.data[0]}
            zoom={props.data.length == 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {props.data.map(
                coords => <Marker position={coords} />
            )}

        </Map>

    </>)
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG32CZyvrrRHvU7maPnpH78WS6OQa1_Xk'
})(CustomMap);


