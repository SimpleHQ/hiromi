import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Link = ({className, isLink, isInverted, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('button', className, classList, {
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
  isLink: PropTypes.bool,
  isInverted: PropTypes.bool,
  children: PropTypes.node,
  ...defaultReactProps
};

Link.defaultProps = {
  isLink: false,
  isInverted: false,
  ...defaultReactPropsValues
};

export default Link;
