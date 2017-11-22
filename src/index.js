import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from "redux-zero/react";

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import actions from './Store/action';
import Connexion from './Pages/Connexion';
import Main from './Pages/Main';
import User from './Pages/User';

import Store from './Store';

import { PrivateRoute } from './Core/PageExtensions';

import './style.css';


const mapToProps = (store) => (store);

const App = connect(mapToProps, actions)(class App extends Component {

  deconnect = () => {
    this.props.deconnect();
  }

  connect = () => {
    this.props.connect();
  }

  render() {
    return (
      <Router>
        <div>
          <div>{JSON.stringify(this.props)}</div>
          <div><button onClick={this.deconnect}>Deconnect</button><button onClick={this.connect}>Connect</button></div>
          <Link to="/">Home</Link>
          <Link to="/connexion/create">Create</Link>
          <Link to="/connexion/sign">sign</Link>
          <Link to="/main/dashboard">dahsboard</Link>
          <Link to="/users/profile">Profile</Link>
          <Connexion />
          <PrivateRoute>
            <Main />
            <User />
          </PrivateRoute>
        </div>
      </Router>
    );
  }
});

///  <Connexion />
// <Main  />
// <User  />
//         <PrivateRoute path="/Main" auth={false} component={Main} />

//     <Route path='/create' component={Create} />

//  <Route exact path="/"
//             render={() => (
//               this.props.auth ? <Main /> : <Redirect to="/login" />
//             )}
//           />

//          <button onClick={this.deconnect}>Deconnect</button>
//           <Link to="/Main">Main</Link>
//         <Link to="/create">Create</Link>

render(<Provider store={Store}><App /></Provider >, document.getElementById('root'));
