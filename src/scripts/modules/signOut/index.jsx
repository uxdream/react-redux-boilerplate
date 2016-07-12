import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';

import { signOutRequest, } from './actions';



class SignOut extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  }



  componentDidMount() {
    const {
      signOut,
    } = this.props;

    signOut();
  }



  render() {
    return (
      <div />
    );
  }
}



function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  signOut: signOutRequest,
};



export default connect(mapStateToProps, mapDispatchToProps)(SignOut);