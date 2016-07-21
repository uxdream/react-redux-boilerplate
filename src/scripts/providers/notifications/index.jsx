import './styles.scss';



import React, { Component, PropTypes, } from 'react';
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

    this._close = ::this._close;
    this._open  = ::this._open;

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

  _open(newNotification) {
    const {
      notifications,
    } = this.state;

    const id = randomId();

    this.setState({
      notifications: [
        ...notifications,
        {
          ...newNotification,
          id,
        },
      ],
    });

    setTimeout(
      this._close.bind(null, id),
      (newNotification.closeAfter || 5) * 1000
    );

    return id;
  }



  renderNotification() {
    const {
      notifications,
    } = this.state;

    if(!notifications.length) {
      return null;
    }

    return (
      <div className="notifications">
        {
          notifications.map((notification) => {
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
          })
        }
      </div>
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
        { this.renderNotification() }
      </div>
    );
  }
}