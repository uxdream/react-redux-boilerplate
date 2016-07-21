import React, { Component, PropTypes, } from 'react';



export default class Notification extends Component {
  static propTypes = {
    children: PropTypes.node,
    close: PropTypes.func,
  }



  renderClose(callback) {
    if(!callback) {
      return null;
    }

    return (
      <button
        className="notification__close"
        onClick={ callback }
      >
        <svg viewBox="0 0 100 100">
          <path d="M59.9,50l25.5-25.5c2.7-2.7,2.7-7.2,0-9.9c-2.7-2.7-7.2-2.7-9.9,0L50,40.1L24.5,14.6c-2.7-2.7-7.2-2.7-9.9,0 c-2.7,2.7-2.7,7.2,0,9.9L40.1,50L14.6,75.5c-2.7,2.7-2.7,7.2,0,9.9c2.7,2.7,7.2,2.7,9.9,0L50,59.9l25.5,25.5c2.7,2.7,7.2,2.7,9.9,0 c2.7-2.7,2.7-7.2,0-9.9L59.9,50z" />
        </svg>
      </button>
    );
  }

  render() {
    const {
      children,
      close,
      ...props,
    } = this.props;

    return (
      <div
        { ...props }
        className="notification"
      >
        { this.renderClose(close) }
        { children }
      </div>
    );
  }
}