import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter,Switch,Route} from 'react-router-native';

import Home from './pages/home';
import Signup from './pages/signUp';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path= "/" component = {Home} />
            <Route path = "/signup" component = {Signup}/>
          </Switch>
      </NativeRouter>
    );
  }
}

