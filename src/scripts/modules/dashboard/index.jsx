import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';

import { changeLanguageRequest, } from 'modules/intl/actions';

import paths from 'consts/paths';

class Dashboard extends Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  }

  static propTypes = {
    changeLanguage: PropTypes.func.isRequired,
  }

  render() {
    const {
      intl,
    } = this.context;

    const {
      changeLanguage,
    } = this.props;

    return (
      <section>
        <Link to={ paths.signOut }>{ intl.message('SIGN_OUT') }</Link>
        <ul>
          <li onClick={ changeLanguage.bind(null, 'de') }>DE</li>
          <li onClick={ changeLanguage.bind(null, 'en') }>EN</li>
          <li onClick={ changeLanguage.bind(null, 'pl') }>PL</li>
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.intl.activeLanguage,
  };
}

const mapDispatchToProps = {
  changeLanguage: changeLanguageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);