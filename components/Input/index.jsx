import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Input = ({className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('input', className, classList);

  return (
    <input className={classList} {...finalProps} />
  );
};

Input.propTypes = {
  ...defaultReactProps
};

Input.defaultProps = {
  ...defaultReactPropsValues
};

export default Input;
