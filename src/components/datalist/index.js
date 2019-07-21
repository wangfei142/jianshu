// 左侧菜单组件
import React, { Component } from 'react';
import { connect } from 'dva';
import styles from "./index.less"
import { Input, Icon, Menu, Dropdown, } from 'antd';

class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div>
        <ul className={styles._header_list}>
          <li>
            <div>
              <a>一次linux被入侵经历</a>
              <p>最近因为工作需要申请了3台为工作需要申请了3台为工作需要申请了3台为工作需要申请了3台Linux虚拟机，因为需要多人多地协作，
                所以开通了互联网访问权限，即给每天服务器配置了公网IP，有一天突然发现服务器运...</p>
              <div>
                <span>图标</span>
              </div>
            </div>
            <div>
              <a href="#">图片</a>
            </div>
          </li>
        </ul>
      </div>);
  }
}

export default SubjectList;
