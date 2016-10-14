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
  children: PropTypes.node
};

class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.visible
    };
    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.visible});
  }

  get closeButton() {
    if (this.props.showClose) {
      return <button className="delete" onClick={this.close}></button>;
    }
  }

  close() {
    this.setState({open: false});
  }

  render() {
    let {classList, ...finalProps} = modifierClassList(this.props);
    classList = classnames('modal', this.props.className, classList);

    return (
      <div className={classList} style={this.state.open ? {'display': 'block'} : {}}>
        <div className="modal-background" onClick={this.close}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            {this.closeButton}
          </header>
          <section className="modal-card-body">
            {this.props.children}
          </section>
          {this.props.footer}
        </div>
      </div>
    );
  }
};

ModalCard.propTypes = {
  title: PropTypes.node,
  footer: PropTypes.instanceOf(ModalCardFooter),
  visible: PropTypes.bool,
  showClose: PropTypes.bool,
  ...defaultReactProps
};

ModalCard.defaultProps = {
  visible: false,
  showClose: true,
  ...defaultReactPropsValues
};

export {
  ModalCard as default,
  ModalCardFooter
};
