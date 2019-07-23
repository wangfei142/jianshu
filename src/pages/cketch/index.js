import React, { Component } from 'react';
import { connect } from 'dva';
class Cketch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>此处是文章的内容详情页的实验文件夹 数据的传送 所有的额文件都要重新取过我是xjb取的！</h1>
        <h2>文章详情页 文章的ID {this.props.tableDataId}</h2>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      tableDataId: state.article.tableDataId,
    };
  },
  null,
)(Cketch);
