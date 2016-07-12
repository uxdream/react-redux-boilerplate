import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';

import Button from 'components/button';
import Input  from 'components/input';

import { signInRequest, } from './actions';



class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
  }



  constructor(props) {
    super(props);

    this._signIn           = ::this._signIn;
    this._onEmailChange    = ::this._onEmailChange;
    this._onPasswordChange = ::this._onPasswordChange;

    this.state = {
      email: '',
      password: '',
    };
  }



  _signIn(event) {
    event.preventDefault();

    const {
      signIn,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    signIn(email, password);
  }



  _onEmailChange(value) {
    this.setState({
      email: value,
    });
  }

  _onPasswordChange(value) {
    this.setState({
      password: value,
    });
  }



  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <section>
        <form onSubmit={ this._signIn }>
          <Input
            onChange={ this._onEmailChange }
            type="text"
            value={ email }
          />
          <Input
            onChange={ this._onPasswordChange }
            type="password"
            value={ password }
          />
          <Button type="submit">Sign in</Button>
        </form>
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