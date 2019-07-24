import React, { Children } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';
import NavLink from 'umi/navlink';
import { connect } from 'dva'


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">全部关注</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">只看作者</a>
    </Menu.Item>
    <Menu.Item key="3">只看专辑</Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">只看专题</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">只看文集</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">只看推送更新</a>
    </Menu.Item>
  </Menu>
);


 class Attention extends React.Component {
    render() {
    return (
      //全局div
      <div className={styles.content}>
        {/* left div */}
        <div className={styles.left}>
          <div className={styles.leftContent}>
            {/* 关注p */}
            <div className={styles.attention}>
              <span>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#">
                    <span> 全部关注&nbsp; </span><Icon type="caret-down" />
                  </a>
                </Dropdown>
              </span>
            </div>
            <div className={styles.addAttention}>
              <span><Icon type="user" /></span>
              <span>添加专注</span>
            </div>
          </div>
          {/* 滑动列表 */}
          <div className={styles.peopleUl}>
            <ul>
              { this.props.UserList.map( item => {
                return (
                  <li><NavLink to={`/subscriptions/${ item.nickname }collection`}><span><img src={item.avatar} alt="" /></span><span>{ item.nickname }</span></NavLink></li>
                )
              } ) }
              
              {/* <li><NavLink to="/subscriptions/collection"><span><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></span><span>四小七</span></NavLink></li>
              <li><NavLink to="/subscriptions/collection"><span><img src="https://upload.jianshu.io/users/upload_avatars/12201495/99e24aee-75fe-4bff-abcd-153a150c5991?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></span><span>Elvmx</span></NavLink></li>
              <li><NavLink to="/subscriptions/collection"><span><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></span><span>四小七</span></NavLink></li> */}
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
  
  componentDidMount(){
    this.props.getUser();
  }


}

export default connect (
  (state) => {
    return {
    UserList:state.user.data,
    }
  },
  (dispatch) => {
    return {
      getUser:() =>{
        dispatch({
          type:'user/getUser',
        })
      }
    }
  }
)(Attention);

