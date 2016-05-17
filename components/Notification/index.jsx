import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Button from '../Button';

const Notification = ({
  isPrimary, isInfo, isSuccess, isWarning, isDanger, onClose,
  children, className, ...props
}) => {
  const classList = classnames('notification', className, {
    'is-primary': isPrimary,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger
  });
  return (
    <div className={classList} {...props}>
      <Button className="delete" onClick={onClose}></Button>
      {children}
    </div>
  );
};

Notification.propTypes = {
  isPrimary: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,

  onClose: PropTypes.func,
  children: PropTypes.node
};

Notification.defaultProps = {
  isPrimary: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false
};

export default Notification;
