import styles from './index.less';
import React from 'react';

class Header extends React.Component {
  state = {
    headerImg: window.localStorage.getItem('loginMethod')
      ? JSON.parse(window.localStorage.getItem('loginMethod'))
      : [],
  };
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.left}>
          <a href="/">回首页</a>
        </div>
        <div className={styles.right}>
          <div className={styles.userInfo}>
            来了啊 <span>{this.state.headerImg.nickname}</span> 大爷
          </div>
          <div className={styles.avatar}>
            <img src={this.state.headerImg.avatar} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
