import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './index.css';
import './assets/general.scss'

import Home from './views/Home/Home.js'
import Login from './views/Login/Login.js'
import Pokemons from './views/Pokemons/Pokemons.js'

const App = (props) => {
 
  const PrivateRoute = ({ component: Component, ...rest}) => {
    return props.user.isLoggedIn ? <Component {...rest} /> : <Redirect to="/login" />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <PrivateRoute path="/pokemons" component={Pokemons}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(App);
