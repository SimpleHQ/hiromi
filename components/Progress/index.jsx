import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Progress = ({
  className, isPrimary, isInfo, isSuccess, isWarning, isDanger, isSmall,
  isMedium, isLarge, value, ...props
}) => {
  const classList = classnames('progress', {
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
    <progress className={classList} value={value} {...props}>{value}%</progress>
  )
};

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,

  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
};

Progress.defaultProps = {
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  value: 0,
  max: 100
};

export default Progress;
