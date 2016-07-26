import React, { Component, PropTypes, } from 'react';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
      ...props,
    } = this.props;

    return (
      <button { ...props }>{ children }</button>
    );
  }
}