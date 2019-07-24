import styles from './index.less';
import Header from '../components/header/index';
import Logout from '../components/header/logout ';
import { connect } from 'dva';
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
  if (
    props.location.pathname === '/login' ||
    props.location.pathname === '/sign' ||
    props.location.pathname === '/write' ||
    props.location.pathname === '/admin' ||
    props.location.pathname === '/admin/user' ||
    props.location.pathname === '/admin/article'
  ) {
    return <ArticleFrom {...props} />;
  }
  return <BasicLayout {...props} />;
};
