import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Content = ({children, className, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('content', className, classList);
  return (
    <div className={classList} {...finalProps}>
      {children}
    </div>
  )
};

Content.propTypes = {
  children: PropTypes.node,
  ...defaultReactProps
};

Content.defaultProps = {
  ...defaultReactPropsValues
};

export default Content;
