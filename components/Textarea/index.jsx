import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Textarea = ({className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('textarea', className, classList);
  return (
    <textarea className={classList} {...finalProps}></textarea>
  );
};

Textarea.propTypes = {
  ...defaultReactProps
};

Textarea.defaultProps = {
  ...defaultReactPropsValues
};

export default Textarea;
