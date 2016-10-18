import React from 'react';
import { Link } from 'react-router';
import current_session from 'models/UserSession'
import { observer } from 'mobx-react';
import DevTools, { configureDevtool } from 'mobx-react-devtools';


@observer
class UserBadge extends React.Component {
  render() {
    const session = this.props.session;
    return (
      <div>
        <p>{!session.is_logged_in ? "Please Log in" :"Hello"} {session.name}</p>
        <button onClick={ () => session.login("will wonka","secret") }>Login {session.loading ? "spinner" :""}</button>
        <small></small>
      </div>
    );
  }
}

const Main = React.createClass({
  componentWillMount() {
    this.setState({title : "hmm"});
  },
  render() {
    let p = this.props;
    // Then we go ahead and return some JSX
    return (
      <div>

        <Link onClick={() => this.setState({title:"please work"})} to="/">

        </Link>
        <UserBadge session={ current_session } />
        {/* We use cloneElement here so we can auto pass down props */}
        {
          React.cloneElement(this.props.children, this.props)
        }
        <DevTools />

      </div>
    );
  }

});

export default Main;
