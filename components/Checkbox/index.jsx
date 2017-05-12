import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Label from '../Label';
import {defaultReactProps, defaultReactPropsValues} from '../utils';

const Checkbox = ({input, children, ...props}) => {
  const inputElement = input ? input : <input type="checkbox" />;

  return (
    <Label isCheckbox {...props}>
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
