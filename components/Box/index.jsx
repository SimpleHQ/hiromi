import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Box = ({children, className, ...props}) => {
  const classList = classnames('box', className);
  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
