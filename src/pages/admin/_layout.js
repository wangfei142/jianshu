import styles from './index.less';
import Header from '../../components/admin/adm_header';
import Menu from '../../components/admin/adm_meun';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Menu />
        </div>
        <div className={styles.right}>{props.children}</div>

      </div>
    </div>
  );
}

export default props => {
  return <BasicLayout {...props} />;
};
