// src/auth/auth0-provider-with-history.js


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import env from '../env';
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = env.REACT_APP_AUTH0_DOMAIN;
  const clientId =env.REACT_APP_AUTH0_CLIENT_ID
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {

    // navigate(appState?.returnTo || window.location.pathname);
    navigate('/')
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
const isUserLoging=()=>{
  if (localStorage.getItem('token') == '' || localStorage.getItem("token") == null) {

    return {login:false,user:{}}
  } else {
    let token = localStorage.getItem('token')
    // console.log('token',token)
    let isValid =jwt.verify(token, env.JWT_SEC_KEY)
    if (isValid) {
      let user = jwt_decode(token)
      if (user != undefined) {
         return {login:true,user}
      }
    }
  }
}

export default Auth0ProviderWithHistory;
export {isUserLoging}