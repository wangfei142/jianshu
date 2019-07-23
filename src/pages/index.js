import Homea from './home/index';
import styles from './index.less';
import React, { Component } from 'react';
import Header from '../components/header/index';
import Logout from '../components/header/logout ';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let list = window.localStorage.getItem('loginMethod');
    return (
      <div className={styles._home_body}>
        {list ? <Header /> : <Logout />}

        <Homea />
      </div>
    );
  }
}

export default Home;
