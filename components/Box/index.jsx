import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Box = ({children, className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('box', className, classList);
  return (
    <div className={classList} {...finalProps}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  ...defaultReactProps
};

Box.defaultProps = {
  ...defaultReactPropsValues
};

export default Box;
