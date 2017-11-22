import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
//import { DashBoard } from '../Templates/Main';

const AsyncDashBoard = Loadable({
  loader: () => import('../Templates/Main/dashboard'),
  loading:(props) => {
  return <div>Loading</div>
}
});

export default () => {
  return (
    <div>
      <Route path="/main/dashboard" component={AsyncDashBoard} />
    </div>
  )
}