import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import paths from 'consts/paths';

import history from '../history';

class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    token: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    const {
      token,
    } = this.props;

    if(!token && nextProps.token) {
      history.push(paths.dashboard);
    }

    if(token && !nextProps.token) {
      history.push(paths.signIn);
    }
  }

  render() {
    const {
      children,
    } = this.props;

    return children;
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

export default connect(mapStateToProps)(AuthProvider);