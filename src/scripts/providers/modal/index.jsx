import './styles.scss';



import React, { Component, PropTypes, } from 'react';

import Modal from './components/modal';



export default class ModalProvider extends Component {
  static childContextTypes = {
    modal: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    children: PropTypes.node,
  }



  constructor(props) {
    super(props);

    this._close = ::this._close;
    this._open  = ::this._open;

    this.state = {
      modal: null,
    };
  }

  getChildContext() {
    return {
      modal: {
        close: this._close,
        open: this._open,
      },
    };
  }



  _close() {
    this.setState({
      modal: null,
    });
  }

  _open(modal) {
    this.setState({
      modal,
    });
  }



  renderModal() {
    const {
      modal,
    } = this.state;

    if(!modal) {
      return null;
    }

    const {
      closeable,
      message,
    } = modal;

    return (
      <Modal close={ closeable ? this._close : undefined }>{ message }</Modal>
    );
  }

  render() {
    const {
      children,
      ...props,
    } = this.props;

    return (
      <div { ...props }>
        { children }
        { this.renderModal() }
      </div>
    );
  }
}