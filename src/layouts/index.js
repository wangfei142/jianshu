import styles from './index.less';

function BasicLayout(props) {
  return (
    <div>

    </div>
  );
}
function articleFrom(props) {
  return (
    <div>
      1111
    </div>
  )

}


export default props => {
  if (props.localtion.pathname === '/write') {
    return articleFrom
  }
  return BasicLayout
};
