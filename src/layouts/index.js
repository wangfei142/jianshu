import styles from './index.less';
import NavLink from 'umi/navlink'

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <NavLink to='/write'>写文章</NavLink>
    </div>
  );
}
function ArticleFrom(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )

}


export default props => {
  if (props.location.pathname === '/write') {
    return <ArticleFrom {...props} />
  }
  return <BasicLayout {...props} />
};
