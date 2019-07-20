
function BasicLayout(props) {
  return (
    <div>
      <h1>zhuye</h1>
    </div>
  );
}

function SimpleLayout(props) {
  return <div>{props.children}</div>;
}

export default props => {
  if (props.location.pathname === '/admin') {
    return <SimpleLayout {...props} />;
  }
  return <BasicLayout {...props} />;
};

