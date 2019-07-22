// 用户管理

import { Table, Button, Input, Radio, Popconfirm, Modal, Form, Cascader } from 'antd';
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
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickname',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '会员等级',
      dataIndex: 'member',
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
                console.log('你点击取消');
              }}
              onConfirm={() => {
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
      code: 'zhejiang',
      name: 'Zhejiang',

    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',

    },
  ];

  onChange = (value) => {
    console.log(value);
  }
  handleOk = () => {
    // 1. 表单校验
    this.props.form.validateFields((err, values) => {
      if (!err) {
        alert('ok');
        // // 2. ajax 请求
        // let id = this.state.curUserInfo.id;
        // let userInfo = values;
        // this.props.updateStu(id, userInfo);
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

            onChange: (page, pageSize) => {
              console.log(page, pageSize);
            },
          }}
          rowKey="id"
        />

        <Modal
          title="修改"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 4, offset: 4 }} wrapperCol={{ span: 8 }}>
            <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名必须要输入' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="用户昵称">
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '用户昵称必须要输入' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="会员等级">
              {getFieldDecorator('member', {
                rules: [{ required: true, message: '会员等级必须要输入' }],
              })(<Cascader
                fieldNames={{ label: 'name', value: 'code' }}
                options={this.options}
                onChange={this.onChange}
                placeholder="Please select"
              />)}

            </Form.Item>
            <Form.Item label="学生性别">
              {getFieldDecorator('sex', {
                rules: [{ required: true, message: '性别必须要输入' }],
              })(
                <Radio.Group>
                  <Radio value={1}>男</Radio>
                  <Radio value={0}>女</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
  }
}

User = Form.create(null)(User);

export default connect(
  (state) => {
    return {
      data: state.user.data
    }
  },
  null
)(User)

