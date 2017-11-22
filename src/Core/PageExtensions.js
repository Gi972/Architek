import React from 'react';
import {
  withRouter,
  Redirect
} from 'react-router-dom';

import { connect } from "redux-zero/react";
import actions from '../Store/action';

const mapToProps = (store) => (store);


export const PrivateRoute = withRouter(connect(mapToProps, actions)(({ auth, children, location }) => {
  return (
    auth ? location.pathname === '/connexion/sign' ?
      <Redirect to={{ pathname: location.state.from.pathname, state: { from: location } }} /> :
       <div>{children}</div>
      : location.pathname !== '/connexion/sign' &&
      <Redirect to={{ pathname: '/connexion/sign', state: { from: location } }} />
  )
}));
