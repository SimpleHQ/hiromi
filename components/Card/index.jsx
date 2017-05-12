import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';
import Link from '../Link';
import Icon from '../Icon';

const CardHeaderIcon = ({onIconClick, iconTag}) => {
  return (
    <a className="card-header-icon" onClick={onIconClick}>
      <Icon tag={iconTag} hasSpan={false} />
    </a>
  );
};

CardHeaderIcon.propTypes = {
  onIconClick: PropTypes.func,
  iconTag: PropTypes.string
};

const CardFooter = ({children}) => {
  return (
    <footer className="card-footer">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: 'card-footer-item'
        });
      })}
    </footer>
  );
};

CardFooter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

const Card = ({footer, title, iconTag, onIconClick, className, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('card', className, classList);

  const icon = iconTag ? <CardHeaderIcon onIconClick={onIconClick} iconTag={iconTag} /> : null;

  const header = title || icon ? (
    <header className="card-header">
      <p className="card-header-title">
        {title}
      </p>
      {icon}
    </header>
  ) : null;

  return (
    <div className={classList}>
      {header}
      <div className="card-content">
        {children}
      </div>
      {footer}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  iconTag: PropTypes.string,
  onIconClick: PropTypes.func,
  footer: PropTypes.instanceOf(CardFooter),
  ...defaultReactProps
};

Card.defaultProps = {
  ...defaultReactPropsValues
};

export {
  Card as default,
  CardFooter
};
