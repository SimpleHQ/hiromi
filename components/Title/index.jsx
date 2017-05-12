import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const getTitleSizeClass = (size) => {
  return classnames({
    'is-1': size === 1,
    'is-2': size === 2,
    'is-3': size === 3,
    'is-4': size === 4,
    'is-5': size === 5,
    'is-6': size === 6
  });
};

const Title = ({className, children, size, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('title', className, getTitleSizeClass(size), classList);
  return React.cloneElement(
    children,
    {
      className: classList,
      ...finalProps
    }
  );
};

Title.propTypes = {
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6
  ]),
  children: PropTypes.element,
  ...defaultReactProps
};

Title.defaultProps = {
  ...defaultReactPropsValues
};

const Subtitle = ({className, children, size, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('subtitle', className, getTitleSizeClass(size), classList);
  return React.cloneElement(
    children,
    {
      className: classList,
      ...finalProps
    }
  );
};

Subtitle.propTypes = {
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6
  ]),
  children: PropTypes.element,
  ...defaultReactProps
};

Subtitle.defaultProps = {
  ...defaultReactPropsValues
};

export {
  Title,
  Subtitle
};
