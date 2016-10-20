import React, {Component} from 'react';
import {
  getTheme,
  MKTextField
} from 'react-native-material-kit';

const theme = getTheme();
class TextField extends Component {

  render(){
    return (
      <MKTextField
      {...this.props} />
      )
    }
}
TextField.defaultProps = {
  floatingLabelEnabled: true,
  placeholder: 'Text',
  style:{height:54},
  floatingLabelEnabled: true,
  floatingLabelFont: {fontSize:20}
}
export default TextField;
