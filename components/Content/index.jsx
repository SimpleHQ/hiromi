import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Content = ({isMedium, isLarge, children, className, ...props}) => {
  const classList = classnames(
    'content', className, {
      'is-medium': isMedium,
      'is-large': isLarge
    }
  );
  return (
    <div className={classList} {...props}>
      {children}
    </div>
  )
};

Content.propTypes = {
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  children: PropTypes.node
};

Content.defaultProps = {
  isMedium: false,
  isLarge: false
};

export default Content;
