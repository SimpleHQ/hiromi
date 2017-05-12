import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Progress = ({className, value, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('progress', className, classList);
  return (
    <progress className={classList} value={value} {...finalProps}>{value}%</progress>
  )
};

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  ...defaultReactProps
};

Progress.defaultProps = {
  value: 0,
  max: 100,
  ...defaultReactPropsValues
};

export default Progress;
