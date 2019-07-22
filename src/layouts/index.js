import Header from '../components/header/index';
import styles from "./index.css"
function BasicLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
function ArticleFrom(props) {
  return <div className={styles.container}> {props.children}</div>;
}


export default props => {
  if (props.location.pathname === '/write' || props.location.pathname === '/admin'
    || props.location.pathname === '/admin/user'
    || props.location.pathname === '/admin/article') {
    return <ArticleFrom {...props} />;
  }
  return <BasicLayout {...props} />;
};




