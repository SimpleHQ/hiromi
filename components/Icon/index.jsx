import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Icon = ({tag, isSmall, isMedium, isLarge, hasSpan, className, ...props}) => {
  const classList = classnames('icon', className);
  const iconElement = <i className={`fa fa-${tag}`}></i>;
  if (!hasSpan) {
    return iconElement;
  }

  return (
    <span className={classList} {...props}>
      {iconElement}
    </span>
  );
};

Icon.propTypes = {
  tag: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  hasSpan: PropTypes.bool
};

Icon.defaultProps = {
  isSmall: false,
  isMedium: false,
  isLarge: false,
  hasSpan: true
};

export default Icon;
