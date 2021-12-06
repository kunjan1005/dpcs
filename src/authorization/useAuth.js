// src/auth/auth0-provider-with-history.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import env from '../env';

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

export default Auth0ProviderWithHistory;