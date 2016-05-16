import React, {PropTypes} from 'react';
import classnames from 'classnames';

const Label = ({className, children, isCheckbox, isRadio, ...props}) => {
  const classList = classnames(className, {
    'label': !isCheckbox && !isRadio,
    'checkbox': isCheckbox,
    'radio': isRadio
  });
  return (
    <label className={classList} {...props}>
      {children}
    </label>
  )
};

Label.propTypes = {
  isDisabled: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  isRadio: PropTypes.bool,
  children: PropTypes.node
};

Label.defaultProps = {
  isDisabled: false,
  isCheckbox: false,
  isRadio: false
};

export default Label;
