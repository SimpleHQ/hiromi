import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Button from '../Button';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Notification = ({onClose, children, className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('notification', className, classList);
  return (
    <div className={classList} {...finalProps}>
      <Button className="delete" onClick={onClose}></Button>
      {children}
    </div>
  );
};

Notification.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  ...defaultReactProps
};

Notification.defaultProps = {
  ...defaultReactPropsValues
};

export default Notification;
