import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';

import { signInRequest, } from './actions';



class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
  }



  constructor(props) {
    super(props);

    this._signIn = ::this._signIn;

    this.state = {
      email: '',
      password: '',
    };
  }



  _signIn() {
    const {
      signIn,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    signIn(email, password);
  }



  render() {
    return (
      <section>

      </section>
    );
  }
}



function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  signIn: signInRequest,
};



export default connect(mapStateToProps, mapDispatchToProps)(SignIn);