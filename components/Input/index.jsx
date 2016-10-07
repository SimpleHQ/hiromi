import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

class Input extends Component {
  constructor(props) {
    super(props);

    let {classList, ...finalProps} = modifierClassList(props);

    this.finalProps = finalProps;
    this.classList = classnames('input', className, classList);
  }

  render() {
    return (
      <input className={this.classList} {...this.finalProps} />
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
