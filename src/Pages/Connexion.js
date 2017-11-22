import React from 'react';
import {Route} from 'react-router-dom';
import { Sign, Create } from '../Templates/Account';


export default () =>{
  return (
  <div>
          <Route path="/connexion/create" component={Create} />
          <Route path="/connexion/sign" component={Sign} />
  </div>
)};