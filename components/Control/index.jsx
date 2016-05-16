import React, {PropTypes} from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import Label from '../Label';

const Control = ({
  iconTag, iconRight, isLoading, hasAddons, prefix, suffix,
  isGrouped, isHorizontal, className, children, ...props
}) => {
  const hasIcon = !!iconTag;
  const classList = classnames(
    'control', className, {
      'has-icon': hasIcon,
      'has-icon-right': iconRight,
      'is-loading': isLoading,
      'has-addons': hasAddons,
      'is-grouped': isGrouped
    }
  );

  const icon = hasIcon ? <Icon tag={iconTag} hasSpan={false} /> : null;

  return (
    <p className={classList} {...props}>
      {prefix}
      {children}
      {icon}
      {suffix}
    </p>
  );
};

Control.propTypes = {
  iconTag: PropTypes.string,
  iconRight: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasAddons: PropTypes.bool,
  isGrouped: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  children: PropTypes.node
};

Control.defaultProps = {
  iconRight: false,
  isLoading: false,
  hasAddons: false,
  isGrouped: false
};

const HorizontalControl = ({label, className, children, ...props}) => {
  const classList = classnames('control', className, 'is-horizontal');

  return (
    <div className={classList} {...props}>
      <div className='control-label'>
        <Label>{label}</Label>
      </div>
      {children}
    </div>
  );
};

HorizontalControl.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};

export {
  Control as default,
  HorizontalControl
};
