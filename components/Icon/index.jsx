import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Icon = ({tag, isSmall, isMedium, isLarge, ...props}) => {
  const classList = classnames('icon', props.className);
  return (
    <span className={classList} {...props}>
      <i className={`fa fa-${tag}`}></i>
    </span>
  );
};

Icon.propTypes = {
  tag: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
};

Icon.defaultProps = {
  isSmall: false,
  isMedium: false,
  isLarge: false
};

export default Icon;
