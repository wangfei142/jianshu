import React, { Component } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import {
  Form,
  Select,
  Input,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

class Personal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.information(values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'));
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className={styles._basic_top}>
        <span className={styles._basic_img}>
          <img src={loginMethod.avatar} alt="" />
        </span>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="呢称">
            <span className="ant-form-text">&nbsp;{loginMethod.nickname}</span>
          </Form.Item>
          <Form.Item label="等级">
            <span className="ant-form-text">会员等级 &nbsp;{loginMethod.isvip}</span>
          </Form.Item>
          <Form.Item label="账号">
            <span className="ant-form-text">&nbsp;{loginMethod.phone}</span>
          </Form.Item>
          <Form.Item label="修改昵称">
            {getFieldDecorator('username', {
              // rules: [{ required: true, message: '昵称必须填!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={loginMethod.nickname}
              />,
            )}
          </Form.Item>
          <Form.Item label="修改头像" extra="选择适当的图片当作头像！">
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> 上传头像
              </Button>
              </Upload>,
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              保存
          </Button>
          </Form.Item>
        </Form>



      </div>
    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Personal);
export default connect(
  // null,
  // //向仓库拿数据
  (state, action) => {
    return {
      //从仓库中取出axios 返回的数据
      // listdata: state.user.loginMethod,
    };
  },
  //向仓库传方法
  {
    information: values => ({ type: 'user/information', values}),
  },
)(WrappedDemo);
