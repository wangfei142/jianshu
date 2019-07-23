import React, { Component } from 'react';
import banner from '../../assets/homeimg/banner.jpg'
import styles from './index.less';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div className={styles._hesder_banner}>
        <img src={banner} alt="" />
      </div>);
  }
}

export default Banner;
