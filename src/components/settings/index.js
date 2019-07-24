import React, { Component } from 'react';
import styles from './index.less'
import NavLink from 'umi/navlink';
import { Icon } from 'antd';

class Settings extends Component {
  state = {
    menus: [
      { to: '/settings/basic', name: '基础设置', icon:"unordered-list"},
      { to: '/settings/personal', name: '个人资料', icon:"user"},
      { to: '/settings/blacklist', name: '黑名单', icon:"stop"},
      { to: '/settings/admire', name: '赞赏设置', icon:"dollar"},
      { to: '/settings/account', name: '帐号管理',icon:"setting" },
    ],
  };
  render() {
    return (
      <div>
        <ul className={styles._settings_top}>
          {this.state.menus.map(item => {
            return (
              <li key={item.to}>
                <NavLink exact activeClassName={styles.active} to={item.to}>
                  <div className={styles._settings_list}>
                  <Icon type={item.icon} />
                  </div>
                  <span>
                    {item.name}
                  </span>
                </NavLink>
              </li>
            )
          })
          }         
        </ul>
      </div>
    );
  }
}

export default Settings;
