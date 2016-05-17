import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Textarea = ({className, ...props}) => {
  const classList = classnames('textarea', className);
  return (
    <textarea className={classList} {...props}></textarea>
  );
};

export default Textarea;
