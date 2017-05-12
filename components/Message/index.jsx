import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Message = ({title, className, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('message', className, classList);

  const header = title ? <div className="message-header">{title}</div> : null;

  return (
    <article className={classList} {...finalProps}>
      {header}
      <div className="message-body">
        {children}
      </div>
    </article>
  );
};

Message.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...defaultReactProps
};

Message.defaultProps = {
  ...defaultReactPropsValues
};

export default Message;
