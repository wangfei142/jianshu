import React, { Component } from 'react';
import styles from "./index.less"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div  className={styles.name}>

      <h1 className={styles.h}>
        我的谁
      </h1>

      </div>
    );
  }
}

export default Header;
