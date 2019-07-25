// // 文章管理
import React from "react";
import styles from './index.less';
import { connect } from "dva"

import { Table, Modal, Button, Popconfirm } from 'antd';

class NestedTable extends React.Component {
  state = {
    visible: false,
    article: '',
    title: '',
  }
  handleOk = () => {
    this.setState({
      visible: false,
    })
  };

  /**
   * 取消按钮点击
   */
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  expandedRowRender = (row) => {

    const columns = [

      {
        title: '评论人',
        dataIndex: 'author',
      },
      {
        title: '评论时间',
        dataIndex: 'retime',
      },
      {
        title: '评论内容',
        dataIndex: 'content',
      },
      {
        title: '操作',
        render: (text, record) => (
          <div>
            <Popconfirm
              title="请确认要删除么"
              onCancel={() => {
                console.log(record._id);
              }}
              onConfirm={() => {
                console.log(record._id);
                this.props.delComment(record._id)
              }}
            >
              <Button type="danger" className={styles.bnt}>删除</Button>
            </Popconfirm>
          </div >
        ),
      },
    ];
    return <Table
      columns={columns}
      dataSource={row.comment}
      pagination={false}
      rowKey={"_id"}
      pagination={{
        defaultPageSize: 5, // 默认每页显示多少
      }} />;
  };

  columns = [

    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '发表时间',
      dataIndex: 'posted_time',
    },
    {
      title: '文章标题',
      dataIndex: 'title',
    },
    {
      title: '阅读次数',
      dataIndex: 'hot',
    },
    {
      title: '评论次数',
      dataIndex: 'discuss',
    },
    {
      title: '点赞次数',
      dataIndex: 'like',
    },
    {
      title: '操作',
      render: (text, record) => (
        <div>
          <Button
            onClick={() => {

              // 打开弹框
              this.setState({
                visible: true,
                article: record.data,
                title: record.title

              });
            }}
          >
            查看
      </Button>
          <Popconfirm
            title="请确认要删除么"
            onCancel={() => {
              console.log('你点击取消');
            }}
            onConfirm={() => {
              this.props.delArticle(record._id);

            }}
          >
            <Button type="danger" className={styles.bnt}>删除</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  render() {
    return (<>
      <Modal
        title={this.state.title}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <div dangerouslySetInnerHTML={{ __html: this.state.article }}></div>
      </Modal>
      <Table
        className="components-table-demo-nested"
        columns={this.columns}
        expandedRowRender={this.expandedRowRender}
        dataSource={this.props.data}
        rowKey={"_id"}
        pagination={{
          defaultPageSize: 5, // 默认每页显示多少
        }}
      /></>
    );
  }
}
class Comments extends React.Component {
  render() {
    return (<>
      <NestedTable data={this.props.data} {...this.props} />
    </>)
  }
  componentDidMount() {
    this.props.getArticle()
  }
}

export default connect(
  (state) => {
    return {
      data: state.article.activeList
    }
  },
  (dispatch) => {
    return {
      getArticle: () => {
        dispatch({
          type: 'article/getArticle',
        });
      },
      delArticle: (id) => { // 删除评论
        dispatch({
          type: 'article/delArticle',
          id
        });
      },
      delComment: (id) => {  //  删除评论
        dispatch({
          type: 'article/delComment',
          id
        });
      },
    }
  }
)(Comments)

