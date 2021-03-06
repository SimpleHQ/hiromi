import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

class Input extends Component {
  render() {
    let {classList, className, ...finalProps} = modifierClassList(this.props);
    classList = classnames('input', className, classList);
    return (
      <input className={classList} {...finalProps} />
    );
  }
}

Input.propTypes = {
  ...defaultReactProps
};

Input.defaultProps = {
  ...defaultReactPropsValues
};

export default Input;
