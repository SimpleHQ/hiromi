import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

const ModalCardFooter = ({children}) => {
  return (
    <footer className="modal-card-foot">
      {children}
    </footer>
  );
};

ModalCardFooter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

const ModalCard = ({title, footer, className, children, ...props}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('modal', className, classList);

  const header = (
    <header className="modal-card-head">
      <p className="modal-card-title">{title}</p>
      <button className="delete"></button>
    </header>
  );

  return (
    <div className={classList} style={props.visible ? {'display': 'block'} : {}}>
      <div className="modal-background"></div>
      <div className="modal-card">
        {header}
        <section className="modal-card-body">
          {children}
        </section>
        {footer}
      </div>
    </div>
  );
};

ModalCard.propTypes = {
  title: PropTypes.node,
  footer: PropTypes.instanceOf(ModalCardFooter),
  visible: PropTypes.bool,
  ...defaultReactProps
};

ModalCard.defaultProps = {
  visible: false,
  ...defaultReactPropsValues
};

export {
  ModalCard as default,
  ModalCardFooter
};
