import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Tag = ({hasDelete, onDelete, isDark, children, className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('tag', className, classList, {
    'is-dark': isDark
  });

  const deleteButton = hasDelete ? (
    <button className="delete" onClick={onDelete}></button>
  ) : null;

  return (
    <span className={classList} {...finalProps}>
      {children}
      {deleteButton}
    </span>
  );
};

Tag.propTypes = {
  isDark: PropTypes.bool,
  hasDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  ...defaultReactProps
};

Tag.defaultProps = {
  isDark: false,
  hasDelete: false,
  ...defaultReactPropsValues
};

export default Tag;
