// 左侧菜单组件
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Input, Icon } from 'antd';
import Navlink from 'umi/navlink';

class Header extends React.Component {
  state = {};
  render() {
    const { Search } = Input;
    return (
      <div className={styles._header_top}>
        <div className={styles._header}>
          <div className={styles._header_nvader}>
            <ul className={styles._header_ul}>
              <li className={styles._header_lileft}>
                {/* <img src="../../../assets/jshu.png" alt="Nav logo" /> */}
                <a href="/">简书</a>
              </li>
              <li className={styles._header_licont}>
                <ul className={styles._h_licont_ul}>
                  <li>
                    <Icon type="compass" />
                    &nbsp;首页
                  </li>
                  <li>
                    <Icon type="mobile" />
                    &nbsp;下载
                  </li>
                  <li className={styles._header_input_wei}>
                    <Search placeholder="搜索" onSearch={value => console.log(value)} />
                  </li>
                </ul>
              </li>
              <li className={styles._header_liright}>
                <ul className={styles._h_liright_ul}>
                  <li className={styles._h_liright_ul_lia}>Aa</li>
                  <li className={styles._h_liright_ul_lia}>
                    <Icon type="sketch" />
                  </li>

                  <li className={styles._h_liright_login}>
                    <a href="/login">登录</a>
                  </li>

                  <li className={styles._h_liright_register}>
                    <a href="/sign">注册</a>
                  </li>
                  <Navlink to="/write" className={styles._h_right_li}>
                    <Icon type="edit" />
                    &nbsp;写文章
                  </Navlink>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
)(Header);
// state => {
//   return {};
// },
// () => {},
