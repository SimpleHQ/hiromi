import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from '../Label';
import {defaultReactProps, defaultReactPropsValues} from '../utils';

const Radio = ({input, name, value, children, ...props}) => {
  const inputElement = input ? input : <input type="radio" name={name} value={value} />;

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
  value: PropTypes.string,
  children: PropTypes.node,
  ...defaultReactProps
};

Radio.defaultProps = {
  ...defaultReactPropsValues
};

export default Radio;
