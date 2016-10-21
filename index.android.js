/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Router, Scene} from 'react-native-mobx';

import App from './components/App';
import Login from './components/login';
import Hello from './components/hello';

export default class rnx extends Component {
  render() {
    return (
          <Router>
            <Scene key="root">
              <Scene key="login" component={Login} title="App2" hideNavBar={true} initial={true} />
              <Scene key="app" component={App} title="App" hideNavBar={false}>
                <Scene key="main" tabs={true} >
                  <Scene key="hello" component={Hello} hideNavBar={false} title="App2"/>
                </Scene>
              </Scene>
            </Scene>
          </Router>
    );
  }
}

AppRegistry.registerComponent('rnx', () => rnx);
