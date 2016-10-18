import React from 'react';
import { Link } from 'react-router';

const Foo = React.createClass({

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <h1>
          <Link to="/">Super Gram</Link>
        </h1>
      </div>
    );
  }

});

export default Foo;
