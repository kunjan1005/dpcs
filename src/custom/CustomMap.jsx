import { Map, GoogleApiWrapper } from 'google-maps-react';
const CustomMap=(props)=>{
    return(<>
     <Map
          google={props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /></>)
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDsfVx4lNUmqbIa4uGOV2kCYCXdYTeeS_I'
  })(CustomMap);
