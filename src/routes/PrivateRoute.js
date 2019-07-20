/**
 * 这个是做登录校验的一个路由页面组件
 */

import { connect } from 'dva';
import { Redirect } from 'dva/router';
const PrivateRoute = props => {
  // 判断
  if (props.userInfo) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default connect(
  state => {
    return {
      userInfo: state.user.userInfo,
    };
  },
  null,
)(PrivateRoute);
