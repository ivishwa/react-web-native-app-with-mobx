import React, { Component } from 'react';
import {
  Navigator,
  NativeModules,
  StatusBar,
  View,
  Text,
  Drawer
} from 'react-native';

import {
  COLOR,
  ThemeProvider
} from 'react-native-material-ui';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

import Realm from 'realm';
const UIManager = NativeModules.UIManager;

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
}

class App extends Component {

  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
        <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<Text>Hiee</Text>}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <ThemeProvider uiTheme={uiTheme}>
                    <Text>Hiee</Text>
                </ThemeProvider>
            </Drawer>
    );
  }
}

export default App;
