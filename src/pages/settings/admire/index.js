import React, { Component } from 'react';
import img2 from '../../../assets/homeimg/GR1TG4PNJI4Q291JSCM7}9M.png';
import styles from './index.less';
class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 className={styles.h3}>大爷顺便打赏点吧</h3>
        <img className={styles.img} src={img2} alt="" />
      </div>
    );
  }
}

export default Personal;
