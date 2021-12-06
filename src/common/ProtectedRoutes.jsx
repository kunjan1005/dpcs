
import React from 'react';
import { Route } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import  Loading  from '../common/Loading';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;