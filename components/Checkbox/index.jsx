import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Label from '../Label';

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
  children: PropTypes.node
};

export default Checkbox;
