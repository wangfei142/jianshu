// 用户管理

import { Table, Button, Input, Popconfirm, Modal, Form, Cascader } from 'antd';
import React from 'react';
import { connect } from "dva"

import styles from './index.less';

class User extends React.Component {
  state = {
    visible: false, // 控制弹框
    curUserInfo: {}, // 当前操作的用户的信息
  };
  // 表格列的数据表现
  columns = [

    {
      title: '用户手机',
      dataIndex: 'phone',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickname',
    },
    {
      title: '会员等级',
      dataIndex: 'isvip',
    },
    {
      title: '操作',
      render: (text, row) => {
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                // 打开弹框
                this.setState({
                  visible: true,
                  curUserInfo: row,
                });
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="请确认要删除么"
              onCancel={() => {
              }}
              onConfirm={() => {
                console.log(row);

                this.props.delUser(row._id)
              }}
            >
              <Button type="danger" className={styles.bnt}>删除</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  /**
   * ok按钮点击
   */
  options = [
    {
      code: 1,
      name: 1,

    },
    {
      code: 2,
      name: 2,

    },
    {
      code: 3,
      name: 3,

    },
    {
      code: 4,
      name: 4,

    },
    {
      code: 5,
      name: 5,

    },
  ];

  onChange = (value) => {
  }
  handleOk = () => {
    // 1. 表单校验
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(this.state.curUserInfo);

        // // 2. ajax 请求
        let id = this.state.curUserInfo._id;
        let userInfo = {
          nickname: values.nickname,
          isvip: values.isvip[0]
        };
        let obj = {
          id,
          userInfo
        }
        this.props.updateUser(JSON.stringify(obj));

        // 关闭弹窗
        this.setState({
          visible: false,
        });
      }
    });
  };

  /**
   * 取消按钮点击
   */
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Table
          dataSource={this.props.data}
          columns={this.columns}
          pagination={{
            defaultPageSize: 5, // 默认每页显示多少
          }}
          rowKey="_id"
        />

        <Modal
          title="修改"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 4, offset: 4 }} wrapperCol={{ span: 8 }}>
            <Form.Item label="用户昵称">
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '用户昵称必须要输入' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="会员等级">
              {getFieldDecorator('isvip', {
                rules: [{ required: true, message: '会员等级必须要输入' }],
              })(<Cascader
                fieldNames={{ label: 'name', value: 'code' }}
                options={this.options}
                onChange={this.onChange}
                placeholder="Please select"
              />)}

            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    this.props.getUser()
  }
}

User = Form.create(null)(User);

export default connect(
  (state) => {
    return {
      data: state.user.data
    }
  },
  (dispatch) => {
    return {
      getUser: () => {  //获取用户
        dispatch({
          type: 'user/getUser',
        });
      },
      delUser: (id) => { //删除用户
        dispatch({
          type: 'user/delUser',
          id
        });
      },
      updateUser: (data) => {
        dispatch({
          type: 'user/updateUser',
          data
        });
      }
    }

  }
)(User)

