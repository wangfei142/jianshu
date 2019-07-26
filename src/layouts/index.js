import styles from './index.less';
import Header from '../components/header/index';
import Logout from '../components/header/logout ';
import { connect } from 'dva';
import router from 'umi/router'
import { message } from 'antd';

function BasicLayout(props) {
  let list = window.localStorage.getItem('loginMethod');
  return (
    <>
      {list ? <Header /> : <Logout />}
      {props.children}
    </>
  );
}
function ArticleFrom(props) {
  return <div className={styles.container}>{props.children}</div>;
}
let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'))
console.log(loginMethod);

export default props => {

  if (

    props.location.pathname === '/admin' ||
    props.location.pathname === '/admin/user' ||
    props.location.pathname === '/admin/article' ||
    props.location.pathname === '/write') {
    if ((props.location.pathname === '/admin' || props.location.pathname === '/admin/user' || props.location.pathname === '/admin/article') && loginMethod.isvip !== 1) {
      message.info('充钱使你强大')
      router.push('/settings/basic')
    } else if (!window.localStorage.getItem('loginMethod')) {
      message.info('先登录才能执行操作')
      router.push('/login')
    } else {
      return <ArticleFrom {...props} />
    }
  }

  if (
    props.location.pathname === '/login' ||
    props.location.pathname === '/sign') {
    return <ArticleFrom {...props} />
  }
  return <BasicLayout {...props} />;
};
