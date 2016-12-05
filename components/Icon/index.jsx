import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Icon = ({tag, hasSpan, className, ...props}) => {
  const iconElement = <i className={`${this.props.tagPrefix}${tag}`}></i>;
  if (!hasSpan) {
    return iconElement;
  }

  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('icon', className, classList);

  return (
    <span className={classList} {...finalProps}>
      {iconElement}
    </span>
  );
};

Icon.propTypes = {
  tag: PropTypes.string.isRequired,
  tagPrefix: PropTypes.string,
  hasSpan: PropTypes.bool,
  ...defaultReactProps
};

Icon.defaultProps = {
  tagPrefix: 'icon-',
  hasSpan: true,
  ...defaultReactPropsValues
};

export default Icon;
