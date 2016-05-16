require('bulma/css/bulma.css');
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route, Link as ReactRouterLink, browserHistory
} from 'react-router'

import Button from './button';
import Link from './link';
import Content from './content';
import Icon from './icon';

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
      <div style={{margin: 50}}>
        <div className="columns">
          <div className="column is-2">
            <div className="menu">
              <p class="menu-label">
                Components
              </p>
              <ul className="menu-list">
                <li><ReactRouterLink to="button">Button</ReactRouterLink></li>
                <li><ReactRouterLink to="link">Link</ReactRouterLink></li>
                <li><ReactRouterLink to="icon">Icon</ReactRouterLink></li>
                <li><ReactRouterLink to="content">Content</ReactRouterLink></li>
              </ul>
            </div>
          </div>
          <div className="column">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="button" component={Button}/>
      <Route path="link" component={Link}/>
      <Route path="icon" component={Icon}/>
      <Route path="content" component={Content}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
