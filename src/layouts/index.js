import styles from './index.css';
import Header from '../components/header/index';
import SubjectList from '../components/datalist/index';
function BasicLayout(props) {
  return (
    <div >
      < Header></Header>


      <div className={styles.container}>
        <div className={styles.headercont}>
          <SubjectList />
        </div>
        <div>

        </div>
      </div>
      {/* {props.children} */}
    </div>
  );
}

export default BasicLayout;

