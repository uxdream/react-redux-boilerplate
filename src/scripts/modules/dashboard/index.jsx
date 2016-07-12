import React, { Component, } from 'react';
import { Link, } from 'react-router';

import paths from 'consts/paths';



export default class Dashboard extends Component {
  render() {
    return (
      <section>
        <Link to={ paths.signOut }>Sign out</Link>
      </section>
    );
  }
}