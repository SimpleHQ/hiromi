import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Tag = ({isDark, children, className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('tag', className, classList, {
    'is-dark': isDark
  });
  return (
    <span className={classList} {...finalProps}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  isDark: PropTypes.bool,
  ...defaultReactProps
};

Tag.defaultProps = {
  isDark: false,
  ...defaultReactPropsValues
};

export default Tag;
