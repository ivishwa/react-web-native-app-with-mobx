import React, { Component } from 'react';
import {
  Navigator,
  NativeModules,
  StatusBar,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

import {
  getTheme,
  MKTextField,
  MKButton
} from 'react-native-material-kit';

const theme = getTheme();
import { Actions } from 'react-native-router-flux';
import Realm from 'realm';

import TextField from '../ui/TextField';
import Container from '../Container';
import { COLOR,
  ThemeProvider,
  Button
} from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};
const UIManager = NativeModules.UIManager;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <TextField placeholder="Site"/>
          <TextField placeholder="Email" keyboardType="email-address"/>
          <TextField placeholder="Password" password={true}/>
          <Button primary
                  raised
                  text="Login"
                  style={{container:{marginTop: 20}}}
                  onPress={Actions.app}/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Login;
