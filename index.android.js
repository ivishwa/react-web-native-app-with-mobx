/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react/native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import liststore from './models/list';

import Hello from './components/hello';


liststore.add("This is cool")

setTimeout( () => liststore.add("This is very cool") , 2500 )

@observer
class TodoList extends Component {
  render() {
    let l = this.props.list;
    return (

      <View style={styles.container}>
        {
          l.list.map( (t) => (
          <Text style={styles.welcome} key={t.key}>
            {t.title}
          </Text>)
          )
        }
        <Text style={styles.welcome}>
          The size is {l.size}
        </Text>
      </View>
    );
  }
}


export default class rnx extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome again
          <Hello />
        </Text>

        <TodoList list={liststore} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnx', () => rnx);
