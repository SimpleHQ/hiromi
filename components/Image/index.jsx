import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const Image = ({src, size, ratio, className, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames(
    'image', className, classList,
    size ? `is-${size}x${size}` : null,
    ratio ? `is-${ratio}` : null
  );

  let content = src ? <img src={src} /> : children;

  return (
    <figure className={classList} {...finalProps}>
      {content}
    </figure>
  )
};

Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf([16, 24, 32, 48, 64, 96, 128]),
  ratio: PropTypes.oneOf(['square', '1by1', '4by3', '3by2', '16by9', '2by1']),
  children: PropTypes.element,
  ...defaultReactProps
};

Image.defaultProps = {
  ...defaultReactPropsValues
};

export default Image;
