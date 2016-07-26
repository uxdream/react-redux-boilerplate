import { Component, PropTypes } from 'react';

export default class IntlProvider extends Component {
  static childContextTypes = {
    intl: PropTypes.object.isRequired,
  }

  static contextTypes = {
    intl: PropTypes.object.isRequired,
  }

  static propTypes = {
    children: PropTypes.node,
  }

  getChildContext() {
    const {
      formatDate,
      formatMessage,
      formatNumber,
      formatPlural,
      formatTime,
    } = this.context.intl;

    return {
      intl: {
        date: formatDate,
        message: (id) => {
          return formatMessage({ id, });
        },
        number: formatNumber,
        plural: formatPlural,
        time: formatTime,
      },
    };
  }

  render() {
    const {
      children,
    } = this.props;

    return children;
  }
}