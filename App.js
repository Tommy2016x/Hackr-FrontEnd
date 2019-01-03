import React from 'react';
import {NativeRouter,Switch,Route} from 'react-router-native';

import Home from './pages/home';
import Signup from './pages/signUp';
import Main from './pages/main';

export default class App extends React.Component {
  render() {
    return (
      // <NativeRouter>
      //     <Switch>
      //       <Route exact path = "/main" component = {Main}/>
      //       <Route exact path= "/" component = {Home} />
      //       <Route exact path = "/signup" component = {Signup}/>
      //     </Switch>
      // </NativeRouter>
      <Main />
    );
  }
}