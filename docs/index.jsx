require('bulma/css/bulma.css');
require('./docs.css');
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route, Link as ReactRouterLink, hashHistory
} from 'react-router'

import Button from './button';
import Link from './link';
import Content from './content';
import Icon from './icon';
import Input from './input';
import Label from './label';
import Control from './control';
import Checkbox from './checkbox';
import Radio from './radio';
import Textarea from './textarea';
import Select from './select';
import Box from './box';
import Progress from './progress';
import Notification from './notification';
import Tag from './tag';
import Title from './title';
import Image from './image';

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
                <li><ReactRouterLink to="input">Input</ReactRouterLink></li>
                <li><ReactRouterLink to="label">Label</ReactRouterLink></li>
                <li><ReactRouterLink to="control">Control</ReactRouterLink></li>
                <li><ReactRouterLink to="checkbox">Checkbox</ReactRouterLink></li>
                <li><ReactRouterLink to="radio">Radio</ReactRouterLink></li>
                <li><ReactRouterLink to="textarea">Textarea</ReactRouterLink></li>
                <li><ReactRouterLink to="select">Select</ReactRouterLink></li>
                <li><ReactRouterLink to="box">Box</ReactRouterLink></li>
                <li><ReactRouterLink to="progress">Progress</ReactRouterLink></li>
                <li><ReactRouterLink to="notification">Notification</ReactRouterLink></li>
                <li><ReactRouterLink to="tag">Tag</ReactRouterLink></li>
                <li><ReactRouterLink to="title">Title</ReactRouterLink></li>
                <li><ReactRouterLink to="image">Image</ReactRouterLink></li>
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
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="button" component={Button}/>
      <Route path="link" component={Link}/>
      <Route path="icon" component={Icon}/>
      <Route path="content" component={Content}/>
      <Route path="input" component={Input} />
      <Route path="label" component={Label} />
      <Route path="control" component={Control} />
      <Route path="checkbox" component={Checkbox} />
      <Route path="radio" component={Radio} />
      <Route path="textarea" component={Textarea} />
      <Route path="select" component={Select} />
      <Route path="box" component={Box} />
      <Route path="progress" component={Progress} />
      <Route path="notification" component={Notification} />
      <Route path="tag" component={Tag} />
      <Route path="title" component={Title} />
      <Route path="image" component={Image} />
    </Route>
  </Router>,
  document.getElementById('app')
);
