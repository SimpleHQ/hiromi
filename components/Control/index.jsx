import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import Label from '../Label';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Control = ({
  iconTag, iconRight, hasAddons, prefix, suffix,
  isGrouped, isHorizontal, className, children, ...props
}) => {
  const hasIcon = !!iconTag;
  const icon = hasIcon ? <Icon tag={iconTag} hasSpan={false} /> : null;

  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('control', className, classList, {
    'has-icon': hasIcon,
    'has-icon-right': iconRight,
    'has-addons': hasAddons,
    'is-grouped': isGrouped,
  });

  return (
    <p className={classList} {...finalProps}>
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
  hasAddons: PropTypes.bool,
  isGrouped: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  children: PropTypes.node,
  ...defaultReactProps
};

Control.defaultProps = {
  iconRight: false,
  hasAddons: false,
  isGrouped: false,
  ...defaultReactPropsValues
};

const HorizontalControl = ({label, className, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('control', className, 'is-horizontal', classList);

  return (
    <div className={classList} {...finalProps}>
      <div className='control-label'>
        <Label>{label}</Label>
      </div>
      {children}
    </div>
  );
};

HorizontalControl.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
  ...defaultReactProps
};

HorizontalControl.defaultProps = {
  ...defaultReactPropsValues
};

export {
  Control as default,
  HorizontalControl
};
