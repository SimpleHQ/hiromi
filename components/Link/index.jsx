import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Link = ({
  className, isLink, isOutlined, isPrimary, isInfo, isSuccess, isWarning,
  isDanger, isInverted, size, isLoading, isDisabled, isSmall, isMedium,
  isLarge, children, ...props
}) => {
  let classList = classnames(
    'button',
    {
      'is-outlined': isOutlined,
      'is-link': isLink,
      'is-primary': isPrimary,
      'is-info': isInfo,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-danger': isDanger,
      'is-inverted': isInverted,
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge,
      'is-loading': isLoading,
      'is-disabled': isDisabled
    }
  );

  return (
    <a className={classList} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  isLink: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isInverted: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node
};

Link.defaultProps = {
  isLink: false,
  isOutlined: false,
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false,
  isInverted: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  isLoading: false,
  isDisabled: false,
  size: 'normal'
};

export default Link;
