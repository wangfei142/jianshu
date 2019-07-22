import styles from "./index.css"
function BasicLayout(props) {
  return (
    <div>
    </div>
  );
}

function SimpleLayout(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default props => {
  if (props.location.pathname === '/admin'
    || props.location.pathname === '/admin/user'
    || props.location.pathname === '/admin/article') {
    return <SimpleLayout {...props} />;
  }
  return <BasicLayout {...props} />;
};

