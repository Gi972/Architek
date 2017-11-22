import React from 'react';
import {Route} from 'react-router-dom';

import { Profile } from '../Templates/User';



export default () =>{
  //console.log('userauth',auth)
  return(<div>
    <Route path="/users/profile" component={Profile}/>   
  </div>
)};