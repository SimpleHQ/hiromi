import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Label from '../Label';
import {defaultReactProps, defaultReactPropsValues} from '../utils';

const Radio = ({input, name, children, ...props}) => {
  const inputElement = input ? input : <input type="radio" name={name} />;

  return (
    <Label isRadio {...props}>
      {inputElement}
      {children}
    </Label>
  );
};

Radio.propTypes = {
  input: PropTypes.node,
  name: PropTypes.string,
  children: PropTypes.node,
  ...defaultReactProps
};

Radio.defaultProps = {
  ...defaultReactPropsValues
};

export default Radio;
