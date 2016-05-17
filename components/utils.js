import {PropTypes} from 'react';
import classnames from 'classnames';

const defaultReactProps = {
  isPrimary:        PropTypes.bool,
  isInfo:           PropTypes.bool,
  isSuccess:        PropTypes.bool,
  isWarning:        PropTypes.bool,
  isDanger:         PropTypes.bool,
  isSmall:          PropTypes.bool,
  isMedium:         PropTypes.bool,
  isLarge:          PropTypes.bool,
  isOutlined:       PropTypes.bool,
  isLoading:        PropTypes.bool,
  isDisabled:       PropTypes.bool,
  isMarginless:     PropTypes.bool,
  isUnselectable:   PropTypes.bool,
  hasTextCentered:  PropTypes.bool,
  hasTextLeft:      PropTypes.bool,
  hasTextRight:     PropTypes.bool,
  isFullWidth:      PropTypes.bool,
  isClearfix:       PropTypes.bool,
  isPulledLeft:     PropTypes.bool,
  isPulledRight:    PropTypes.bool,
  isOverlay:        PropTypes.bool
};

const defaultReactPropsValues = {
  isPrimary:        false,
  isInfo:           false,
  isSuccess:        false,
  isWarning:        false,
  isDanger:         false,
  isSmall:          false,
  isMedium:         false,
  isLarge:          false,
  isOutlined:       false,
  isLoading:        false,
  isDisabled:       false,
  isMarginless:     false,
  isUnselectable:   false,
  hasTextCentered:  false,
  hasTextLeft:      false,
  hasTextRight:     false,
  isFullWidth:      false,
  isClearfix:       false,
  isPulledLeft:     false,
  isPulledRight:    false,
  isOverlay:        false
}

const modifierClassList = ({
  isPrimary, isInfo, isSuccess, isWarning,
  isDanger, isSmall, isMedium, isLarge,
  isOutlined, isLoading, isDisabled,
  isMarginless, isUnselectable,
  hasTextCentered, hasTextLeft, hasTextRight,
  isFullWidth, isClearfix, isPulledLeft,
  isPulledRight, isOverlay,
  ...props
}) => {
  return {
    classList: classnames({
      // Colors
      'is-primary': isPrimary,
      'is-info': isInfo,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-danger': isDanger,

      // Sizes
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge,
      'is-fullwidth': isFullWidth,

      // State
      'is-outlined': isOutlined,
      'is-loading': isLoading,
      'is-disabled': isDisabled,

      // Helpers
      'is-marginless': isMarginless,
      'is-unselectable': isUnselectable,

      // Text
      'has-text-centered': hasTextCentered,
      'has-text-left': hasTextLeft,
      'has-text-right': hasTextRight,

      // Float
      'is-clearfix': isClearfix,
      'is-pulled-left': isPulledLeft,
      'is-pulled-right': isPulledRight,

      // Overlay
      'is-overlay': isOverlay
    }),
    ...props
  };
};

export {
  defaultReactProps,
  defaultReactPropsValues,
  modifierClassList
};
