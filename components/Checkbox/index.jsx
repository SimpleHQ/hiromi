import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Label from '../Label';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Checkbox = ({input, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  const inputElement = input ? input : <input type="checkbox" />;

  return (
    <Label isCheckbox className={classList} {...finalProps}>
      {inputElement}
      {children}
    </Label>
  );
};

Checkbox.propTypes = {
  input: PropTypes.node,
  children: PropTypes.node,
  ...defaultReactProps
};

Checkbox.defaultProps = {
  ...defaultReactPropsValues
};

export default Checkbox;
