import React, {PropTypes} from 'react';
import classnames from 'classnames';

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

const Title = (className, children, size, {...props}) => {
  const classList = classnames('title', className, getTitleSizeClass(size));
  return React.cloneElement(
    children,
    {
      className: classList,
      ...props
    }
  );
};

Title.propTypes = {
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6
  ]),
  children: PropTypes.element
};

const Subtitle = (className, children, size, {...props}) => {
  const classList = classnames('subtitle', className, getTitleSizeClass(size));
  return React.cloneElement(
    children,
    {
      className: classList,
      ...props
    }
  );
};

Subtitle.propTypes = {
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6
  ]),
  children: PropTypes.element
};

export {
  Title,
  Subtitle
};
