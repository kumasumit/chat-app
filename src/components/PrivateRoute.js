import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'workbox-routing';

const PrivateRoute = ({ children, ...routeprops }) => {
  const profile = true;
  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeprops}>{children}</Route>;
};

export default PrivateRoute;
