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

export default props => {
  if (props.location.pathname === '/admin' ||
    props.location.pathname === '/admin/user' ||
    props.location.pathname === '/admin/article' ||
    props.location.pathname === '/write') {
    if (!window.localStorage.getItem('loginMethod')) {
      router.push('/')
      message.info('先登录才能执行操作，2秒后跳转....')
      setTimeout(() => {
        router.push('/login')
      }, 2000);
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
