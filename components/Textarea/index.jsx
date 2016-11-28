import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

class Textarea extends Component {
  render() {
    let {classList, className, ...finalProps} = modifierClassList(this.props);
    classList = classnames('textarea', className, classList);
    return (
      <textarea className={classList} ref="element" {...finalProps}></textarea>
    );
  }
}

Textarea.propTypes = {
  ...defaultReactProps
};

Textarea.defaultProps = {
  ...defaultReactPropsValues
};

export default Textarea;
