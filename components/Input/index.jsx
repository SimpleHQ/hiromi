import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Input = ({
  className, isPrimary, isInfo, isSuccess, isWarning, isDanger, isSmall, isMedium,
  isLarge, ...props
}) => {
  const classList = classnames(
    'input', className, {
      'is-primary': isPrimary,
      'is-info': isInfo,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-danger': isDanger,
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge
    }
  );
  return (
    <input className={classList} {...props} />
  );
};

Input.propTypes = {
  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
};

Input.defaultProps = {
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false,
  isSmall: false,
  isMedium: false,
  isLarge: false
};

export default Input;
