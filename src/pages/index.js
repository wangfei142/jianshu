import SubjectList from '../components/datalist/index';
import Rightlits from '../components/rightlist/index';
import styles from './index.css';
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headercont}>
          <SubjectList />
        </div>
        <div className={styles.rightlits}>
          <Rightlits />
        </div>
      </div>

    );
  }
}

export default Home;
