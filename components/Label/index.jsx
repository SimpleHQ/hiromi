import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Label = ({className, children, isCheckbox, isRadio, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames(className, classList, {
    'label': !isCheckbox && !isRadio,
    'checkbox': isCheckbox,
    'radio': isRadio
  });
  return (
    <label className={classList} {...finalProps}>
      {children}
    </label>
  )
};

Label.propTypes = {
  isDisabled: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  isRadio: PropTypes.bool,
  children: PropTypes.node,
  ...defaultReactProps
};

Label.defaultProps = {
  isDisabled: false,
  isCheckbox: false,
  isRadio: false,
  ...defaultReactPropsValues
};

export default Label;
