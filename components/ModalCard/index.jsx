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
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.visible});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open !== prevState.open) {
      if (this.state.open) {
        if (this.props.onOpen) { this.props.onOpen(); }
      } else {
        if (this.props.onClose) { this.props.onClose(); }
      }
    }
  }

  get closeButton() {
    if (this.props.showClose) {
      return <button className="delete" onClick={this.handleClose}></button>;
    }
  }

  get renderHeader() {
    if (!this.props.title && !this.props.showClose) return;
    return (
      <header className="modal-card-head">
        <p className="modal-card-title">{this.props.title}</p>
        {this.closeButton}
      </header>
    );
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    let {classList, ...finalProps} = modifierClassList(this.props);
    classList = classnames('modal', this.props.className, classList, {'is-active': this.state.open});

    return (
      <div className={classList}>
        <div className="modal-background" onClick={this.handleClose}></div>
        <div class="modal-card-shell">
          <div className="modal-card">
            {this.renderHeader}
            <section className="modal-card-body">
              {this.props.children}
            </section>
            {this.props.footer}
          </div>
        </div>
      </div>
    );
  }
};

ModalCard.propTypes = {
  title: PropTypes.node,
  footer: PropTypes.node,
  visible: PropTypes.bool,
  showClose: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
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
