import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Button = ({
  className, isLink, isInverted,
  children, ...props
}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('button', className, classList, {
    'is-link': isLink,
    'is-inverted': isInverted,
  });

  return (
    <button className={classList} {...finalProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  isLink: PropTypes.bool,
  isInverted: PropTypes.bool,
  children: PropTypes.node,
  ...defaultReactProps
};

Button.defaultProps = {
  isLink: false,
  isInverted: false,
  ...defaultReactPropsValues
};

export default Button;
