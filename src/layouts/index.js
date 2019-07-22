import Header from '../components/header/index';
function BasicLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
function ArticleFrom(props) {
  return <div> {props.children}</div>;
}

export default props => {
  if (props.location.pathname === '/write') {
    return <ArticleFrom {...props} />;
  }
  return <BasicLayout {...props} />;
};
