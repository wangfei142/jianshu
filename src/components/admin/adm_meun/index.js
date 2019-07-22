// 左侧菜单组件
import React from 'react';
import NavLink from 'umi/navlink';
import styles from './index.less';
import { connect } from 'dva';

class Menu extends React.Component {
  state = {
    menus: [
      { to: '/admin', name: '系统首页' },
      { to: '/admin/user', name: '用户管理' },
      { to: '/admin/article', name: '文章管理' },
    ],
  };
  render() {
    // 我有权限访问的菜单
    return (
      <ul className={styles.wrap}>
        {this.state.menus.map(item => {
          return (
            <li key={item.to}>
              <NavLink exact activeClassName={styles.active} to={item.to}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Menu;
