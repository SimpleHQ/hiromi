import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';

class Modal extends Component {
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
        this.props.onOpen();
      } else {
        this.props.onClose();
      }
    }
  }

  get closeButton() {
    if (this.props.showClose) {
      return <button className="modal-close" onClick={this.handleClose}></button>;
    }
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
        <div className="modal-content">
          {this.props.children}
        </div>
        {this.closeButton}
      </div>
    );
  }
};

Modal.propTypes = {
  visible: PropTypes.bool,
  showClose: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  ...defaultReactProps
};

Modal.defaultProps = {
  visible: false,
  showClose: true,
  ...defaultReactPropsValues
};

export default Modal;
