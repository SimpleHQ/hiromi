import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Tag = ({
  isDark, isPrimary, isInfo, isSuccess, isWarning, isDanger, isSmall,
  isMedium, isLarge, children, className, ...props
}) => {
  const classList = classnames('tag', className, {
    'is-dark': isDark,
    'is-primary': isPrimary,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge
  });
  return (
    <span className={classList} {...props}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  isDark: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
};

Tag.defaultProps = {
  isDark: false,
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false,
  isSmall: false,
  isMedium: false,
  isLarge: false
};

export default Tag;
