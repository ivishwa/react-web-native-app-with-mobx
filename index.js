/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

import { observer } from 'mobx-react';

import liststore from 'models/list';

import Hello from 'components/hello';


liststore.add("This is cool")

setTimeout( () => liststore.add("This is very cool") , 2500 )

@observer
class TodoList extends Component {
  render() {
    let l = this.props.list;
    return (
      <div>
      <ul>
        {
          l.list.map( (t) => (
          <li key={t.key}>
            {t.title}
          </li>)
          )
        }
      </ul>
        <div>
          The size is {l.size}
        </div>
      </div>
    );
  }
}


export default class Rnx extends Component {
  render() {
    return (
      <div>
        <div>
          <Hello />
          Welcome webby
        </div>

        <TodoList list={liststore} />
      </div>
    );
  }
}


render(<Rnx/>,  document.getElementById('app'));
