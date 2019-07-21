// 左侧菜单组件
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Input, Icon, Menu, Dropdown, message } from 'antd';

//消息部分的下拉菜单
const menu = (
  <Menu >
    <Menu.Item  >
      <a target="_blank" href="#" ><span><Icon type="message" /></span>评论</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="upload" /></span>投稿请求</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="mail" /></span>简信</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="heart" /></span>喜欢点赞</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="ellipsis" /></span>其它提醒</a>
    </Menu.Item>
  </Menu>

);

//头像部分的下拉菜单
const portrait = (
  <Menu >
    <Menu.Item  >
      <a target="_blank" href="#" ><span><Icon type="user" /></span>我的主页</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="book" /></span>收藏的文章</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="heart" /></span>喜欢的文章</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="circle" /></span>已购内容</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="wallet" /></span>我的钱包</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="setting" /></span>设置</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#"><span><Icon type="logout" /></span>退出</a>
    </Menu.Item>
  </Menu>

);



class Header extends React.Component {
  state = {

  };
  render() {

    const { Search } = Input;
    return (
      <div className={styles._header_top}>
        <div className={styles._header}>
          <div className={styles._header_nvader}>
            <ul className={styles._header_ul}>
              <li className={styles._header_lileft}>
                {/* <img src="../../../assets/jshu.png" alt="Nav logo" /> */}
                <h2>简书</h2>
              </li>
              <li className={styles._header_licont}>
                <ul className={styles._h_licont_ul} >
                  <li><Icon type="compass" />&nbsp;发现</li>
                  <li><Icon type="read" />&nbsp;关注</li>
                  <Dropdown overlay={menu}>
                    <li className={styles.lig}><Icon type="sound" />&nbsp;消息</li>
                  </Dropdown>
                  <li className={styles._header_input}><Search
                    placeholder="搜索"
                    onSearch={value => console.log(value)}
                  />
                  </li>
                </ul>
              </li>
              <li className={styles._header_liright}>
                <ul className={styles._h_liright_ul} >

                  <li className={styles._h_liright_ul_lia}>Aa</li>

                  <li className={styles._h_liright_ul_lia}><Icon type="sketch" /></li>

                  <Dropdown overlay={portrait}>
                    <li className={[styles.lig, styles._h_tignt_ta]}><span>
                      <img src="" alt="没" className={styles._h_tignt_tb} />
                      <Icon type="caret-down" />
                    </span></li>
                  </Dropdown>

                  <li className={styles._h_right_li}><Icon type="edit" />&nbsp;写文章</li>
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
  state => {
    return {

    };
  },
  () => {

  }
)(Header);
