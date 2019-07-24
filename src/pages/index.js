import Homea from './home/index';
import styles from './index.less';
import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles._home_body}>
        <Homea />
      </div>
    );
  }
}

export default Home;
