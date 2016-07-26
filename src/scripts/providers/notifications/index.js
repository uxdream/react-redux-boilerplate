import './styles.scss';

import React, { Component, PropTypes, } from 'react';
import Animation from 'react-addons-css-transition-group';
import { remove, } from 'lodash/fp';

import randomId from 'utils/randomId';

import Notification from './components/notification';

export default class NotificationProvider extends Component {
  static childContextTypes = {
    notification: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);

    this._close  = ::this._close;
    this._native = ::this._native;
    this._open   = ::this._open;

    this.state = {
      notifications: [],
    };
  }

  getChildContext() {
    return {
      notification: {
        close: this._close,
        open: this._open,
      },
    };
  }

  _close(id) {
    const {
      notifications,
    } = this.state;

    const removed = remove((notification) => {
      return notification.id === id;
    }, notifications);

    this.setState({
      notifications: removed,
    });
  }

  _native(notification) {
    if(window.Notification.permission === 'default') {
      window
        .Notification
        .requestPermission((permission) => {
          return this._open(notification, undefined, permission === 'default');
        });

      return;
    }

    new window.Notification(notification.message); // eslint-disable-line no-new
  }

  _open(notification, event, skipNative) {
    const {
      notifications,
    } = this.state;

    if(window.Notification.permission !== 'denied' && !skipNative) {
      this._native(notification);

      return;
    }

    const id = randomId();

    this.setState({
      notifications: [
        ...notifications,
        {
          ...notification,
          id,
        },
      ],
    });

    if(notification.closeAfter !== 0) {
      setTimeout(
        this._close.bind(null, id),
        (notification.closeAfter || 5) * 1000
      );
    }
  }

  renderNotification() {
    const {
      notifications,
    } = this.state;

    if(!notifications.length) {
      return null;
    }

    return notifications.map((notification) => {
      const {
        id,
        message,
      } = notification;

      return (
        <Notification
          close={ this._close.bind(null, id) }
          key={ id }
        >{ message }</Notification>
      );
    });
  }

  render() {
    const {
      children,
      ...props,
    } = this.props;

    return (
      <div { ...props }>
        { children }
        <Animation
          className="notification__group"
          component="div"
          transitionEnterTimeout={ 600 }
          transitionLeaveTimeout={ 400 }
          transitionName={ {
            enter:       'animation-in',
            enterActive: 'animation-in--active',
            leave:       'animation-out',
            leaveActive: 'animation-out--active',
          } }
        >{ this.renderNotification() }</Animation>
      </div>
    );
  }
}