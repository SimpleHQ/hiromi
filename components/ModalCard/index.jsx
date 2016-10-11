import React, { Component, PropTypes } from 'react';
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
  children: PropTypes.element
};

class ModalCard extends Component {
  render() {
    let {classList, ...finalProps} = modifierClassList(this.props);
    classList = classnames('modal', this.props.className, classList);

    return (
      <div className={classList} style={this.props.visible ? {'display': 'block'} : {}}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button className="delete"></button>
          </header>
          <section className="modal-card-body">
            {this.children}
          </section>
          {footer}
        </div>
      </div>
    );
  }

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
