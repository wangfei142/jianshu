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
const { Option } = Select;

class Personal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="呢称">
          <span className="ant-form-text">China</span>
        </Form.Item>
        <Form.Item label="等级">
          <span className="ant-form-text">会员等级 1</span>
        </Form.Item>
        <Form.Item label="账号">
          <span className="ant-form-text">手机号</span>
        </Form.Item>

        <Form.Item label="修改昵称">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '昵称必须填!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            修改信息
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Personal);
export default connect(
  null,
  null,
)(WrappedDemo);
