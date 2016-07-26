import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this._onChange = ::this._onChange;
  }

  _onChange(event) {
    const value = event.target.value;

    const {
      onChange,
    } = this.props;

    if(onChange) {
      onChange(value);
    }
  }

  render() {
    const {
      ...props,
    } = this.props;

    return (
      <input
        { ...props }
        onChange={ this._onChange }
      />
    );
  }
}