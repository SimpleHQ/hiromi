import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Button = ({
  className, isLink, isOutlined, isPrimary, isInfo, isSuccess, isWarning,
  isDanger, isInverted, children, ...props
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
      'is-inverted': isInverted
    }
  );

  return (
    <button className={classList} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  isLink: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isInverted: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  isLink: false,
  isOutlined: false,
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false,
  isInverted: false
};

export default Button;
