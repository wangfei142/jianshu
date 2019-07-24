
import SubjectList from '../../components/datalist/index';
import Rightlits from '../../components/rightlist/index';
import Footerhome from '../../components/footer/index';
import styles from './index.less';
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>     
        <div className={styles.container}>
          <div className={styles.headercont}>
            <SubjectList />
          </div>
          <div className={styles.rightlits}>
            <Rightlits />
          </div>
        </div>
        <div className={styles.container}>
          <Footerhome />
        </div>
      </div>
    );
  }

}

export default Home;
