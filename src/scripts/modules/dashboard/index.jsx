import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';

import { changeLanguageRequest, } from 'modules/intl/actions';

import paths from 'consts/paths';

class Dashboard extends Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
  }

  static propTypes = {
    changeLanguage: PropTypes.func.isRequired,
  }

  render() {
    const {
      intl,
      modal,
      notification,
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
        <ul>
          <li onClick={ modal.open.bind(null, {
            closeable: true,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ornare sem. Aenean viverra neque risus, ut pellentesque lacus auctor vel. Sed ultricies lectus sed dignissim rhoncus. Integer congue velit felis, finibus fermentum libero maximus eget. Curabitur scelerisque quam libero, a aliquet est convallis non. In tristique nisi at dolor suscipit mattis. Nam semper est ut odio tristique convallis. Proin viverra nulla sem, ut vulputate erat dictum ut. Phasellus dapibus pellentesque consequat. Curabitur sapien sem, porttitor sit amet eleifend id, convallis in tortor. Proin commodo ipsum massa, nec cursus arcu consequat id. Aliquam accumsan tellus vel justo ornare, eu vehicula libero hendrerit.',
          }) }>MODAL</li>
          <li onClick={ notification.open.bind(null, {
            message: 'Your mom died',
          }) }>NOTIFICATION</li>
        </ul>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  changeLanguage: changeLanguageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);