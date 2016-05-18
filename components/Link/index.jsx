import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Link = ({isButton, className, isLink, isInverted, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames(className, classList, {
    'button': isButton,
    'is-link': isLink,
    'is-inverted': isInverted
  });

  return (
    <a className={classList} {...finalProps}>
      {children}
    </a>
  );
};

Link.propTypes = {
  isButton: PropTypes.bool,
  isLink: PropTypes.bool,
  isInverted: PropTypes.bool,
  children: PropTypes.node,
  ...defaultReactProps
};

Link.defaultProps = {
  isButton: true,
  isLink: false,
  isInverted: false,
  ...defaultReactPropsValues
};

export default Link;
