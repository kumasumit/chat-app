import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'workbox-routing';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;
  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
