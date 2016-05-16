require('bulma/css/bulma.css');
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Button from './button';

const Description = React.createClass({
  propTypes: {
    children: PropTypes.node.isRequired
  },

  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <Description>Button</Description>
        <Button />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
